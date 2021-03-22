import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:52129/api/cars/getcardetail';

  constructor(private httpClient: HttpClient) {}

  getCars():Observable<ListResponseModel<CarDetail>>{
    console.log('transfer is started');
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl);
  }
}