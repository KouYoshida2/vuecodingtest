import axios from 'axios';
import { apikey } from '../../env/apikey';

export default class getPopulationData {
  public baseUrl:string;
  public APIkey:string;
  public instance;

  constructor(public code?:number){

    this.baseUrl = "https://opendata.resas-portal.go.jp/api/v1/population/composition/";
    this.APIkey = apikey;
  
    this.instance = axios.create({
      baseURL:this.baseUrl,
      headers:{"X-API-KEY":this.APIkey},
      timeout: 2000,
    });

  }

  public getPopulation = async () => {
    const getData = await this.instance.get(`perYear?cityCode=-&prefCode=${this.code}`);
    return getData.data.result.data[0].data;
  }

}



