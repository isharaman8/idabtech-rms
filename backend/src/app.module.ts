// third partyy imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// inner imports
import { config } from './config/default';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PlanModule } from './modules/plan/plan.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CompaniesModule } from './modules/companies/companies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PlanModule,
    PrismaModule,
    CompaniesModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
