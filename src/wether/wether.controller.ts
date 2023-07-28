import { Controller, Get, Query } from '@nestjs/common';
import { WetherService } from './wether.service';

@Controller('wether')
export class WetherController {
  constructor(private readonly wetherService: WetherService) {}

  @Get()
  async getWeather(@Query('city') city: string): Promise<any> {
    const result = await this.wetherService.getWeather(city);
    return result;
  }
}
