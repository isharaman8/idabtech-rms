// third party imports
import * as _ from 'lodash';
import {
  Get,
  Res,
  Body,
  Post,
  Param,
  Patch,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';

// inner imports
import { CResponse } from 'src/interfaces';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto, UpdateCompanyDto } from 'src/dto';
import { _getParsedParams, _getParsedQuery } from 'src/helpers/parser';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  // Internal helper to handle create and update
  private async createOrUpdateCompany(
    response: CResponse,
    statusCode: number,
    type: 'create' | 'update',
  ) {
    const { company: payload = {}, oldCompany = {} } = response.locals;

    if (type === 'create') {
      delete payload.active;
    }

    const processedCompany = await this.companiesService.createOrUpdateCompany(
      payload.uid,
      payload,
      oldCompany,
    );

    return response.status(statusCode).send({
      company: processedCompany,
    });
  }

  @Get()
  async getAllCompanies(@Query() _query: any) {
    const query = _getParsedQuery(_query);

    let companies = await this.companiesService.getAllCompanies(query);

    return { companies };
  }

  @Post()
  async createCompany(
    @Body('company') _company: CreateCompanyDto,
    @Res() response: CResponse,
  ) {
    await this.createOrUpdateCompany(response, 201, 'create');
  }

  @Patch(':company_uid')
  async updateCompany(
    @Body('company') _company: UpdateCompanyDto,
    @Res() response: CResponse,
  ) {
    await this.createOrUpdateCompany(response, 200, 'update');
  }

  @Delete(':company_uid')
  async deleteCompany(@Param() params: any, @Res() response: CResponse) {
    const parsedParams = _getParsedParams(params);

    await this.companiesService.deleteCompany(parsedParams.companyId);

    return response.status(204).send();
  }
}
