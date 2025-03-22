// third party imports
import { Module } from '@nestjs/common';

// inner imports
import { CompaniesService } from './companies.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CompaniesController } from './companies.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
