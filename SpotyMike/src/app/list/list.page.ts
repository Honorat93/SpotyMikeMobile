import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {heartOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';
interface Artist {
  name: string;
  songs: string[];
}

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar,IonicModule, IonTitle,CommonModule, IonContent],
})
export class ListPage {
  artists: Artist[] = [
    {
      name: 'Nama User',
      songs: Array(20).fill('Work Instrument')
    },
    {
      name: 'Randy Stanton',
      songs: Array(50).fill('Chill Vibes')
    },
    {
      name: 'Angel Herwitz',
      songs: Array(30).fill('Summer Breezes')
    }
  ];

  constructor() { addIcons({heartOutline})}
  ngOnInit() {

  }

  likeArtist(artist: Artist) {
  
    console.log('Liked artist:', artist.name);
  }
}


