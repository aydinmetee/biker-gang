import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [IonicModule],
  exports: [
    // Modules
    IonicModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    // Pipes

    // Components
  ],
  providers: [
    // 💣
  ],
})
export class SharedModule {}
