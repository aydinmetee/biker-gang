import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginationResult } from 'src/app/shared/models/pagination-result';
import { BaseApiService } from './base-api.service';

export interface SearchQuery {
  pageNumber?: number;
  pageInSize?: number;
  sort?: string;
  searchObject?: any;
}

@Injectable()
export class RestClientService {
  get apiUrl(): string {
    return 'NOT ASSIGN';
  }

  constructor(public http: BaseApiService) {}

  public search<T>({
    pageNumber = 0,
    pageInSize = 100,
    sort = 'creDate,ASC',
    searchObject = {},
  }: SearchQuery = {}): Observable<PaginationResult<T>> {
    const url =
      this.apiUrl +
      '/search?page=' +
      pageNumber +
      '&size=' +
      pageInSize +
      '&sort=' +
      sort;
    return this.http.post(url, searchObject);
  }

  public create(object: any): Observable<any> {
    return this.http.post(this.apiUrl, object);
  }

  public update(object: any): Observable<any> {
    return this.http.put(this.apiUrl + '/' + object.id, object);
  }

  public delete(object: any): Observable<any> {
    return this.http.del(this.apiUrl + '/' + object.id);
  }

  public findById(objectId: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + objectId);
  }

  public getSingle<T>(query): Observable<T> {
    return this.getList(query).pipe(map((res) => res[0] as T));
  }

  public getList<T>(searchObject: any = {}): Observable<T[]> {
    return this.search<T>({ searchObject }).pipe(
      map((result) => result.content)
    );
  }
}
