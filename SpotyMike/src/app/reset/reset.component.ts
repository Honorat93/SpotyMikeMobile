import { Component, OnInit } from '@angular/core';
import {IonInput, IonButton, IonLabel, IonContent} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  standalone: true,
  imports: [IonInput, FormsModule, IonButton, IonLabel, IonContent]
})
export class ResetComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
