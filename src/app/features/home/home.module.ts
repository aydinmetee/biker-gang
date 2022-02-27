import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './pages/home/home.page';
import { SharedModule } from 'primeng/api';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule, CommonModule],
  declarations: [HomePage],
})
export class HomePageModule {}
