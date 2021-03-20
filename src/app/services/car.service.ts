import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:52129/api/cars/getall';

  constructor(private httpClient: HttpClient) {}

  getCars():Observable<CarResponseModel>{
    console.log('transfer is started');
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
