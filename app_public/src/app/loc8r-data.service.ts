import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { Location, Review } from './location';
import { User } from './user';
import { Authresponse } from './authresponse';
import { BROWSER_STORAGE } from './storage';

@Injectable({
  providedIn: 'root'
})
export class Loc8rDataService {

  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getLocations(lat: number, lng: number): Promise<Location[]> {

    // const lng: number = 72.3;
    // const lat: number = 18.1;
    const maxDistance: number = 200000;
    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDis=${maxDistance}`;
    return this.http.get(url).toPromise().then(response => response as Location[]).catch(this.handleError);
  }

  public getLocationById(locationid: string): Promise<Location> {
    const url = `${this.apiBaseUrl}/locations/${locationid}`;
    return this.http.get(url).toPromise().then(response => response as Location).catch(this.handleError);
  }

  public addReviewById(locationid: string, formdata: Review): Promise<Review> {
    const url: string = `${this.apiBaseUrl}/locations/${locationid}/reviews`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('loc8r-token')}`
      })
    };
    return this.http.post(url, formdata, httpOptions).toPromise().then(response => response as Review).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong:', error);
    return Promise.reject(error.message || error);
  }


  public login(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('login', user).then(response => response as Authresponse);
  }

  public register(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<Authresponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http.post(url, user).toPromise().then(response => response as Authresponse).catch(this.handleError);
  }
}
