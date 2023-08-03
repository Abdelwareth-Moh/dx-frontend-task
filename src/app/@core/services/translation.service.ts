import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  pageDirection: string = 'ltr';
  pageDirectionChange: Subject<string> = new Subject<string>();
  constructor() {
    this.pageDirectionChange.subscribe((value) => {
      this.pageDirection = value;
    });
  }
  togglepageDirection(val: any) {
    this.pageDirectionChange.next(val);
  }
}
