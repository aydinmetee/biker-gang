import { NgModule } from '@angular/core';
import { RestClientService } from './services/rest-client.service';
import { BaseApiService } from './services/base-api.service';
import { SessionActiveGuard } from './guards/session-active.guard';
import { LocalStorageService } from './services/local-storage.service';
import { UtilityService } from './services/utility.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    RestClientService,
    BaseApiService,
    SessionActiveGuard,
    LocalStorageService,
    UtilityService,
  ],
  exports: [],
})
export class CoreModule {}
