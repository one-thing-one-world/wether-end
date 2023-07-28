import { Module } from '@nestjs/common';
import { WetherService } from './wether.service';
import { WetherController } from './wether.controller';

@Module({
  controllers: [WetherController],
  providers: [WetherService],
})
export class WetherModule {}
