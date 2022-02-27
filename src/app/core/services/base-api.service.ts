import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseApiService {
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, options?): Observable<any> {
    return this.http.get<T>(endpoint, options);
  }

  post<T>(endpoint: string, body: object = {}, options?): Observable<any> {
    return this.http.post<T>(endpoint, body, options);
  }

  del<T>(endpoint: string, options?): Observable<any> {
    return this.http.delete(endpoint, options);
  }

  put<T>(endpoint: string, body: object = {}, options?): Observable<any> {
    return this.http.put<T>(endpoint, body, options);
  }
}
