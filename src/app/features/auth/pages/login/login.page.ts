import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { UtilityService } from 'src/app/core/services/utility.service';
import { BaseComponent } from 'src/app/shared/models/base-component';
import { STORAGE_KEYS } from 'src/app/shared/models/storage-keys.enum';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent implements OnInit {
  constructor(utilServ: UtilityService, private authService: AuthService) {
    super(utilServ);
    this.form = this.builder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    const { username, password } = this.form.value;
    this.authService
      .requestTokenFromServer(username, password)
      .toPromise()
      .then((response) => {
        this.utilServ.localStorageService.set(
          STORAGE_KEYS.ACCESS_TOKEN,
          response.accessToken
        );
        this.utilServ.router.navigate(['home']);
        this.form.reset();
      });
  }

  navToRegister() {
    this.utilServ.router.navigate(['auth/register']);
  }
}
