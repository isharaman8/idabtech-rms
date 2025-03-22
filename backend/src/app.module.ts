// third partyy imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// inner imports
import { config } from './config/default';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CompaniesModule } from './modules/companies/companies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrismaModule,
    CompaniesModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
