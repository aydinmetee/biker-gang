import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { STORAGE_KEYS } from 'src/app/shared/models/storage-keys.enum';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class SessionActiveGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.localStorageService.get(STORAGE_KEYS.ACCESS_TOKEN)) {
      return true;
    } else {
      return this.router.navigate(['auth/login']);
    }
  }
}
