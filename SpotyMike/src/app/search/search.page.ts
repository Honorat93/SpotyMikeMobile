import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonLabel,IonHeader, IonIcon, IonTabBar,IonTabs,IonTabButton, IonTitle,IonSearchbar, IonCard, IonCardContent, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import{homeOutline,searchOutline,libraryOutline,personOutline} from 'ionicons/icons';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonLabel, IonIcon, IonTabs,IonTabButton,IonTabBar,IonCard,IonSearchbar, IonCardContent,CommonModule, FormsModule]
})
export class SearchPage implements OnInit {

  constructor() { addIcons({homeOutline,searchOutline,libraryOutline,personOutline})}

  ngOnInit() {
  }

}
