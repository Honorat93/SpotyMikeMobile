import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonIcon, IonButton, IonText, IonList } from '@ionic/angular/standalone';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {eye, eyeOff} from 'ionicons/icons';
import { ModalController } from '@ionic/angular';
import { PasswordResetComponent } from 'src/app/password-reset/password-reset.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { EMPTY, catchError, tap } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ IonList, IonText, IonButton, IonIcon, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule,HttpClientModule]
})
export class LoginPage implements OnInit {

  private formBuilder = inject(FormBuilder);
  private modalController = inject(ModalController)
  loginForm!: FormGroup;
  submitForm = false;
  passwordVisible: boolean = false;
  private router = inject(Router);
  private authService = inject(AuthentificationService);
  errorMessage: string = '';

  constructor() {addIcons({eyeOff,eye})}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[A-Z])(?=.*[!@#$&*]).{8,}')]]
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

 onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
        .pipe(
          tap(success => {
            console.log('Login success:', success);
            if (success) {
              console.log('Redirection vers home');
              this.router.navigateByUrl('/tabs/home');
            } else {
              this.errorMessage = 'Adresse email ou mot de passe incorrect.';
            }
          }),
          catchError(err => {
            this.errorMessage = 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.';
            console.error('Login error:', err);
            return EMPTY;
          })
        )
        .subscribe();
    } else {
      console.log('Form is invalid');
    }
  }

  async onPasswordLost() {
    const modal = await this.modalController.create({
      component: PasswordResetComponent
    });
    await modal.present();
  }
}