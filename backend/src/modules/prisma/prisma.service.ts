import { PrismaClient } from '@prisma/client';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    });
  }

  async onModuleInit() {
    console.log('🔄 Connecting to the database...');
    await this.$connect();
    console.log('✅ Database connected successfully.');
  }

  async onModuleDestroy() {
    console.log('🛑 Disconnecting from the database...');
    await this.$disconnect();
    console.log('✅ Database disconnected.');
  }
}
