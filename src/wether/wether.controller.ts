import { Controller, Get, Query } from '@nestjs/common';
import { WetherService } from './wether.service';

@Controller('wether')
export class WetherController {
  constructor(private readonly wetherService: WetherService) {}

  @Get()
  async getWeather(@Query('districtCode') districtCode: string): Promise<any> {
    try {
      const result = await this.wetherService.getWeather(districtCode);
      return result;
    } catch (error) {
      return {
        result: `some err:${error}`,
      };
    }
  }
}
