import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonFooter,IonCardContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonItem, IonList, IonButtons, IonRange, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {heartOutline,shareSocialOutline,shuffleOutline,playSkipBackOutline,playSkipForwardOutline,repeatOutline,playCircleOutline} from 'ionicons/icons';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonFooter,IonToolbar, IonButton, IonIcon, IonItem, IonList, IonButtons,
    IonRange, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel, IonBackButton,
    CommonModule, FormsModule,IonCardContent
  ]
})
export class PlayPage implements OnInit {
  currentTrack = {
    title: 'Island Getaway',
    artist: 'Olivia Lyric',
    album: 'Island Vibes',
    lyrics: 'Les paroles de la chanson Island Getaway...',

  };
  isPlaying: boolean = false;
  showLyrics: boolean = false;
  isShuffle: boolean = false;
  isRepeat: boolean = false;
  progress: number = 0;
  currentTime: number = 0;
  duration: number = 180;
  
  constructor() { addIcons({heartOutline, shareSocialOutline,shuffleOutline,playSkipBackOutline,playSkipForwardOutline,repeatOutline,playCircleOutline})}

  ngOnInit() {

  }

  previousTrack() {
    console.log('Passer à la piste précédente');
  }



  nextTrack() {
  
      console.log('Passer à la piste suivante');
    }
    
    togglePlay() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
       
        this.trackTime();
      }
    }
  
    trackTime() {
      setInterval(() => {
        if (this.isPlaying) {
          this.currentTime++;
          this.progress = (this.currentTime / this.duration) * 100;
        }
      }, 1000); 
    }
   
  


  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
  }

  toggleRepeat() {
    this.isRepeat = !this.isRepeat;
    
  }

  toggleLyrics() {
    this.showLyrics = !this.showLyrics;
  
  }

  addToFavorites() {
    console.log('Ajouter aux favoris');

  }

  share() {
    console.log('Partager');
   
  }

}

