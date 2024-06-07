import { Component, OnInit, inject } from '@angular/core';
import { IonList, IonIcon, IonItem,IonLabel } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { heartOutline, trashOutline } from 'ionicons/icons';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  standalone: true,
  imports: [IonIcon,IonItem,IonList,IonLabel],
})
export class PopoverComponent  implements OnInit {

  isFavorite: boolean = false;
  constructor() {addIcons({heartOutline, trashOutline}) }

  ngOnInit() {}

  private popoverController = inject(PopoverController);

   toggleFavorite(): void {
    this.isFavorite = !this.isFavorite; 
    if (this.isFavorite) {
      this.addFavorite();
    } else {
      this.removeFavorite();
    }
  }

  addFavorite(): void {
    console.log('Chanson ajoutée aux favoris');
  }

  removeFavorite(): void {
    console.log('Chanson retirée des favoris');
  }


  toggleDelete(): void {

  }


}
