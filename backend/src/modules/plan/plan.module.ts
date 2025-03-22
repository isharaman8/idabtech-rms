// third party imports
import { Module } from '@nestjs/common';

// inner imports
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PlanService],
  controllers: [PlanController],
})
export class PlanModule {}
