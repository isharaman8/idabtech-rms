// third party imports
import * as _ from 'lodash';
import { NextFunction } from 'express';
import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';

// inner imports
import { _notEmpty, parseArray } from 'src/utils';
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

  async validatePatchRequest(method: string, companyUids: string[]) {
    if (method.toUpperCase() !== 'PATCH') return true;

    const companies = await this.prisma.company.findMany({
      where: { uid: { in: companyUids } },
    });

    if (companies.length !== companyUids.length) {
      throw new NotFoundException('One or more companies not found');
    }
  }

  async validateDeleteRequest(method: string, companyUids: string[]) {
    if (method.toUpperCase() !== 'DELETE') return true;

    const companies = await this.prisma.company.findMany({
      where: { uid: { in: companyUids } },
    });

    if (companies.length !== companyUids.length) {
      throw new NotFoundException('One or more companies not found');
    }
  }

  async use(req: CRequest, res: CResponse, next: NextFunction) {
    const {
      body: { companies: _companies = [] },
    } = req;

    const companies = parseArray(_companies, [_companies]);
    const params = _getParsedParams(req.params);
    const companyUids = _.compact([
      params.companyId,
      ..._.map(companies, 'uid'),
    ]);
    const parsedCompanies = companies.map((company: any) =>
      this.companiesService.getParsedCompanyPayload(company),
    );

    await this.validatePatchRequest(req.method, companyUids);
    await this.validateDeleteRequest(req.method, companyUids);

    // attach to response
    res.locals.companies = parsedCompanies;
    next();
  }
}
