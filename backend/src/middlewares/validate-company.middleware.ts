// third party imports
import * as _ from 'lodash';
import { NextFunction } from 'express';
import {
  Injectable,
  NestMiddleware,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

// inner imports
import { CRequest, CResponse } from 'src/interfaces';
import { _getParsedParams } from 'src/helpers/parser';
import { _notEmpty, parseArray, parseObject } from 'src/utils';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateOrUpdateCompanyDto, SocialLinkDto } from 'src/dto';
import { CompaniesService } from 'src/modules/companies/companies.service';

@Injectable()
export class ValidateCompanyMiddleware implements NestMiddleware {
  constructor(
    private prisma: PrismaService,
    private companiesService: CompaniesService,
  ) {}

  validatePatchRequest(
    method: string,
    oldCompany: CreateOrUpdateCompanyDto | null,
  ) {
    if (method.toUpperCase() !== 'PATCH') return true;

    if (_.isEmpty(oldCompany)) {
      throw new NotFoundException('Company not found');
    }
  }

  validateDeleteRequest(
    method: string,
    oldCompany: CreateOrUpdateCompanyDto | null,
  ) {
    if (method.toUpperCase() !== 'DELETE') return true;

    if (_.isEmpty(oldCompany)) {
      throw new NotFoundException('Company not found');
    }
  }

  async validatePostRequest(
    method: string,
    givenData: CreateOrUpdateCompanyDto,
  ) {
    if (!['POST'].includes(method.toUpperCase())) return true;

    const existingCompany = await this.prisma.company.findFirst({
      where: {
        OR: [
          {
            username: givenData.username
              ? { equals: givenData.username }
              : undefined,
          },
          { email: givenData.email ? { equals: givenData.email } : undefined },
          {
            secondaryEmail: givenData.secondaryEmail
              ? { equals: givenData.secondaryEmail }
              : undefined,
          },
          {
            mobile: givenData.mobile ? { equals: givenData.mobile } : undefined,
          },
        ].filter(Boolean),
      },
      select: { uid: true },
    });

    if (existingCompany) {
      throw new BadRequestException(
        'Another company exists with the same username, email, secondary email, or mobile number.',
      );
    }
  }

  async validateCompanySocialLinks(
    companyPayload: CreateOrUpdateCompanyDto,
    oldCompanyPaylod: CreateOrUpdateCompanyDto | null,
    method: string,
  ) {
    if (!['POST', 'PATCH'].includes(method.toUpperCase())) return true;

    // support for deleting social links
    if (method.toUpperCase() === 'PATCH') {
      const newSocialLinks = parseArray(companyPayload.socialLinks, []).map(
          (link: SocialLinkDto) => link.uid,
        ),
        oldSocialLinks = parseArray(oldCompanyPaylod?.socialLinks, []).map(
          (link: SocialLinkDto) => link.uid,
        );

      const deletedUids = _.compact(
        _.difference(oldSocialLinks, newSocialLinks),
      ) as Array<string>;

      if (deletedUids.length) {
        await this.prisma.socialLink.deleteMany({
          where: { uid: { in: deletedUids } },
        });
      }
    }

    let links = parseArray(companyPayload.socialLinks, []);

    links = _.uniqBy(
      links,
      (link: SocialLinkDto) => `${link.platform}-${link.link}`,
    );

    links.forEach((link: SocialLinkDto) => {
      if (!link.platform || !link.link) {
        throw new BadRequestException(
          'Each social link must have a platform and a link',
        );
      }

      if (!/^(http|https):\/\/[^ "]+$/.test(link.link)) {
        throw new BadRequestException(`Invalid URL format: ${link.link}`);
      }
    });

    // set unique links
    _.set(companyPayload, 'socialLinks', links);

    return true;
  }

  async use(req: CRequest, res: CResponse, next: NextFunction) {
    const { body: { company: _company = {} } = { body: {} } } = req;

    const params = _getParsedParams(req.params);
    const companyUid = params.companyId || _company.uid;

    const parsedCompany =
      this.companiesService.getParsedCompanyPayload(_company);

    let oldCompany: CreateOrUpdateCompanyDto | null = null;

    if (['PATCH', 'DELETE'].includes(req.method.toUpperCase())) {
      oldCompany = (await this.prisma.company.findUnique({
        where: { uid: companyUid },
        include: { socialLinks: true },
      })) as CreateOrUpdateCompanyDto;
    }

    await this.validateCompanySocialLinks(
      parsedCompany,
      oldCompany,
      req.method,
    );

    // await this.validatePostRequest(req.method, parsedCompany);
    this.validatePatchRequest(req.method, oldCompany);
    this.validateDeleteRequest(req.method, oldCompany);

    // Attach to response
    res.locals.company = parsedCompany;
    res.locals.oldCompany = parseObject(oldCompany, {});

    next();
  }
}
