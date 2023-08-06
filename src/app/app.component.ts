import { Component } from '@angular/core';
import { TranslationService } from './@core/services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dx-frontend-task';
  auth: boolean = false;
  pageDir: string = 'ltr';
  constructor(private transService: TranslationService) {
    if (localStorage.getItem('role')) this.auth = true;
    this.getPageDirection();
  }
  getPageDirection() {
    this.transService.pageDirectionChange.subscribe((value) => {
      this.pageDir = value;
    });
  }
}
