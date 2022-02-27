import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilityService } from 'src/app/core/services/utility.service';

export class BaseComponent implements OnDestroy {
  public form: FormGroup;
  public searchForm: FormGroup;

  public dateFormat = 'dd/MM/yyyy HH:mm';
  public onlyDateFormat = 'dd/MM/yyyy';
  public builder: FormBuilder;

  constructor(protected utilServ: UtilityService) {
    this.builder = this.utilServ.builder;
  }

  ngOnDestroy() {}
}
