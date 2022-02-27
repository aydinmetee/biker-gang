import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { STORAGE_KEYS } from 'src/app/shared/models/storage-keys.enum';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class UtilityService {
  farm$: Observable<any>;

  constructor(
    public localStorageService: LocalStorageService,
    public router: Router,
    public builder: FormBuilder
  ) {}

  onLogoutButtonClick() {
    this.localStorageService.remove(STORAGE_KEYS.ACCESS_TOKEN);
    this.router.navigate(['auth/login'], { replaceUrl: true });
  }
}
