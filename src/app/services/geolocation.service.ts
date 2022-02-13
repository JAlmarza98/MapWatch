import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GEOLOCATION_API_KEY} from '@constants/keys';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  API_KEY = GEOLOCATION_API_KEY;

  constructor(private http: HttpClient) { }

  searchDirection(search: string) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${this.API_KEY}&address=${search}`);
  }
}
