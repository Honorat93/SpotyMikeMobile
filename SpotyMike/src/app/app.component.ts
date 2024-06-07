import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabs, IonIcon, IonTabButton, IonTabBar, IonLabel } from '@ionic/angular/standalone';
import { TabNaviguationService } from './services/tab-naviguation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonLabel, IonTabBar, IonTabButton, IonIcon, IonTabs, IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit{
  constructor() {}

  private tabNaviguationService = inject(TabNaviguationService); 
  private router = inject(Router);
  private tabUrl: { [tab: string]: string } = {
    'home': '/home',
    'profile': '/profile',
    'favorites': '/favorites',
    'music-playlist': '/music-playlist',
  };

  ngOnInit(): void {

  }
}