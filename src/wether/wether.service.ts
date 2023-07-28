import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WetherService {
  private readonly apiKey = 'z0k0Xs2LQUndLh1rmdyHGZiejqzkv9Ef';
  async getWeather(districtCode: string): Promise<any> {
    const urls = `https://api.map.baidu.com/weather/v1/?district_id=${districtCode}&data_type=all&ak=${this.apiKey}`;
    try {
      const response = await axios.get(urls);
      return response.data;
    } catch (error) {
      return {
        result: `some err:${error}`,
      };
    }
  }
}
