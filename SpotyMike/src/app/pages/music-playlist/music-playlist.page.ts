import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, ellipsisHorizontalOutline, ellipsisVerticalOutline } from 'ionicons/icons';
import { MusicService } from 'src/app/services/music.service';
import { Song } from 'src/app/interface/song';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.page.html',
  styleUrls: ['./music-playlist.page.scss'],
  standalone: true,
  imports: [IonList, IonLabel, IonItem, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MusicPlaylistPage implements OnInit {

  constructor() {addIcons({chevronBackOutline, ellipsisHorizontalOutline, ellipsisVerticalOutline})}

  songs: Song[] = []
  private musicService = inject(MusicService)


  ngOnInit() {
    this.musicService.getSongs().subscribe(data => {
      this.songs = data;
    }, error => {
      console.error('Erreur lors de la récupération des chansons : ', error);
    });
  }
}