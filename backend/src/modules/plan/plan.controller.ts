// third party imports
import { Controller, Get } from '@nestjs/common';

// inner imports
import { PlanService } from './plan.service';

@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  async getAllPlans() {
    const plans = await this.planService.getAllPlans();

    return { plans };
  }
}
