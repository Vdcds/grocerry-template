import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProductModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ProductService],
})
export class AppModule {}
