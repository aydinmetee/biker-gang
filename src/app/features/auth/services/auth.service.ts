import { Injectable } from '@angular/core';
import { RestClientService } from 'src/app/core/services/rest-client.service';
import { Urls } from 'src/app/shared/models/urls';

@Injectable()
export class AuthService extends RestClientService {
  get apiUrl(): string {
    return Urls.BaseUrl + '/auth';
  }

  public requestTokenFromServer(username, password) {
    const formData = {
      username,
      password,
    };
    return this.http.post(this.apiUrl + '/login', formData);
  }

  public register(formData: any) {
    return this.http.post(this.apiUrl + '/register', formData);
  }
}
