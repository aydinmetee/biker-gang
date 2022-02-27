import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { UtilityService } from 'src/app/core/services/utility.service';
import { BaseComponent } from 'src/app/shared/models/base-component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends BaseComponent implements OnInit {
  constructor(utilServ: UtilityService, private authService: AuthService) {
    super(utilServ);
    this.form = this.builder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.required],
    });
  }

  ngOnInit() {}

  register() {
    const modal = this.form.value;
    this.authService
      .register(modal)
      .toPromise()
      .then(() => {
        this.utilServ.router.navigate(['home']);
        this.form.reset();
      });
  }
}
