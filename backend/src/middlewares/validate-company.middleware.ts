// third party imports
import * as _ from 'lodash';
import { NextFunction } from 'express';
import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';

// inner imports
import { _notEmpty } from 'src/utils';
import { CreateOrUpdateCompanyDto } from 'src/dto';
import { CRequest, CResponse } from 'src/interfaces';
import { _getParsedParams } from 'src/helpers/parser';
import { PrismaService } from 'src/modules/prisma/prisma.service';
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

  async use(req: CRequest, res: CResponse, next: NextFunction) {
    const {
      body: { company: _company = {} },
    } = req;

    const params = _getParsedParams(req.params);
    const companyUid = params.companyId || _company.uid;

    const parsedCompany =
      this.companiesService.getParsedCompanyPayload(_company);

    let oldCompany: CreateOrUpdateCompanyDto | null = null;

    if (companyUid) {
      oldCompany = (await this.prisma.company.findUnique({
        where: { uid: companyUid },
      })) as CreateOrUpdateCompanyDto;
    }

    this.validatePatchRequest(req.method, oldCompany);
    this.validateDeleteRequest(req.method, oldCompany);

    // Attach to response
    res.locals.company = parsedCompany;
    res.locals.oldCompany = oldCompany;

    next();
  }
}
