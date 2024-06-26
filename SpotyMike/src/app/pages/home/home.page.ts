import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonTabBar, IonTabButton, IonFooter, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipsisHorizontalOutline, searchOutline } from 'ionicons/icons';
import { TabsPage } from '../tabs/tabs.page';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonIcon, IonFooter, IonTabButton, IonTabBar, IonHeader, IonToolbar, IonTitle, IonContent,IonIcon,TabsPage,PopoverComponent],
})
export class HomePage {
  constructor() {addIcons({searchOutline, ellipsisHorizontalOutline})}
  selectedGenre: string = 'all';

  private popoverController = inject(PopoverController);

  async presentPopover(ev: any) {
    console.log('Boutton cliqu&', ev); 

    try {
      const popover = await this.popoverController.create({
        component: PopoverComponent,
        event: ev,
        translucent: true
      });

      console.log('Popover crée:', popover); 

      await popover.present();
      console.log('Popover affiché'); 
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

