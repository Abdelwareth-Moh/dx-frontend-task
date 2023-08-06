import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/@core/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  name = 'Angular';
  role: any;
  public isCollapsed = true;
  constructor(
    private router: Router,
    public translate: TranslateService,
    private transService: TranslationService
  ) {
    this.role = localStorage.getItem('role');
  }
  changeDirection(dir: any) {
    this.transService.togglepageDirection(dir);
  }
}
