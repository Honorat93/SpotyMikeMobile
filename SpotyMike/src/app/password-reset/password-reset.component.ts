import { Component, OnInit,inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import {IonicModule, ModalController } from '@ionic/angular';
import { Validators } from '@angular/forms';
import {IonHeader,IonToolbar,IonButtons,IonButton, IonTitle,IonContent,IonInput,IonItem} from '@ionic/angular/standalone';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
  standalone: true,
  imports: [IonItem,IonInput,IonContent,IonTitle,IonButton,IonButtons,IonToolbar,IonHeader,],
})
export class PasswordResetComponent  implements OnInit {

  private formBuilder = inject(FormBuilder);
  private modalController = inject(ModalController)
  resetPasswordForm!: FormGroup;


  constructor() { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')]]
    })
  }

  async cancel()
  {
    await this.modalController.dismiss();
  }



}
