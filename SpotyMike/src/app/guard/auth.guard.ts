import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { map, take } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthentificationService);

  return authService.isAuthentificated().pipe(
    take(1),
    map(isAuthentificated => {
      console.log('User authenticated:', isAuthentificated);
      if (isAuthentificated) {
        return true;
      } else {
        console.log('User not authenticated, redirecting to login');
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
