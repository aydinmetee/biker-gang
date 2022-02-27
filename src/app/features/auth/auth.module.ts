import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';
import { AuthService } from './services/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterPage } from './pages/register/register.page';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginPage, RegisterPage],
  imports: [AuthRoutingModule, SharedModule, CommonModule],
  providers: [AuthService],
})
export class AuthModule {}
