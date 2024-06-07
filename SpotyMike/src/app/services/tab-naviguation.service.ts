import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabNaviguationService {
  private selectedTab: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setSelectedTab(tabName: string){
    this.selectedTab.next(tabName)
  }

  getSelectedTab(): BehaviorSubject<string>{
    return this.selectedTab;
  }
  constructor() { }
}
