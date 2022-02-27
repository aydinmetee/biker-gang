import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';
import { BaseComponent } from 'src/app/shared/models/base-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseComponent implements OnInit {
  cards: { url: string; icon: string; header: string; size: number }[] = [];

  constructor(utilServ: UtilityService) {
    super(utilServ);
    this.cards.push({
      url: '/profile',
      icon: 'person-circle-outline',
      header: 'My Profile',
      size: 6,
    });
    this.cards.push({
      url: '/crews',
      icon: 'people-outline',
      header: 'Crews',
      size: 6,
    });
  }

  ngOnInit() {}
}
