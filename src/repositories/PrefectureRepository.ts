import axios from 'axios'
import { apikey } from '../../env/apikey'

export async function getPrefectures(){

  const instance = axios.create({
    baseURL: 'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    timeout: 1000,
    headers: {"X-API-KEY":apikey}
  });

  const getPrefecturesDate = await instance.get('');
  return getPrefecturesDate.data.result;
}
