import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:52129/api/cars/getcardetail';

  constructor(private httpClient: HttpClient) {}

  getCars():Observable<CarDetailResponseModel>{
    console.log('transfer is started');
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
