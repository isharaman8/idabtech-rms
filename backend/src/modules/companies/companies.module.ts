// third party imports
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

// inner imports
import { CompaniesService } from './companies.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CompaniesController } from './companies.controller';
import { ValidateCompanyMiddleware } from 'src/middlewares/validate-company.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {
  configure(consumer: MiddlewareConsumer) {
    const routes = [
      { path: 'companies', method: RequestMethod.POST },
      { path: 'companies/:company_uid', method: RequestMethod.PATCH },
      { path: 'companies/:company_uid', method: RequestMethod.DELETE },
    ];

    consumer.apply(ValidateCompanyMiddleware).forRoutes(...routes);
  }
}
