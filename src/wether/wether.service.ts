import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WetherService {
  private readonly apiKey = 'z0k0Xs2LQUndLh1rmdyHGZiejqzkv9Ef';
  async getWeather(city: string): Promise<any> {
    const district_id = 222405;
    // curl -i -k -g 'https://api.map.baidu.com/weather/v1/?district_id=222405&data_type=all&ak=z0k0Xs2LQUndLh1rmdyHGZiejqzkv9Ef'
    // const url = `https://api.weather.com/v3/wx/forecast/daily/5day?apiKey=${this.apiKey}&format=json&language=zh-CN&postalKey=${city}`;
    const urls = `https://api.map.baidu.com/weather/v1/?district_id=${district_id}&data_type=all&ak=${this.apiKey}`;
    const response = await axios.get(urls);
    console.log(response, 'response');
    return response.data;
  }
}
