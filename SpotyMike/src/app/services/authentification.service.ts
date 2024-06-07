import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs';
import { User } from 'src/app/interface/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private localStorageService = inject(LocalStorageService);
  private http = inject(HttpClient);
  private backendUrl = 'http://localhost:3000/auth/login';

  login(email: string, password: string): Observable<boolean> {
    console.log('email:', email, 'password:', password);
    return this.http.post<User>(this.backendUrl, { email, password }, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        console.log('Login response:', response);
        const responseBody = response.body;
        if (responseBody && responseBody.userId && responseBody.token && responseBody.token.access && responseBody.token.access.token) {
          const accessToken = responseBody.token.access.token;
          console.log('Login successful, token:', accessToken);
          this.localStorageService.setItem('authToken', accessToken);
          return true;
        }
        console.log('Login failed');
        return false;
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => new Error(error.message || 'Login error'));
      })
    );
  }

  isAuthentificated(): Observable<boolean> {
    const authToken = this.localStorageService.getItem('authToken').getValue(); 
    console.log('Verification si le user est connecté, token found:', authToken);
    return of(!!authToken);
  }
}
