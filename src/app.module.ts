import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WetherModule } from './wether/wether.module';

@Module({
  imports: [WetherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
