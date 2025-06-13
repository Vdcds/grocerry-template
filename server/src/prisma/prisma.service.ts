import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import PrismaClient from '@grocery-shop/db';
const prisma = new PrismaClient();
@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await prisma.$connect();
  }

  async onModuleDestroy() {
    await prisma.$disconnect();
  }

  get client(): PrismaClient {
    return prisma;
  }
}
