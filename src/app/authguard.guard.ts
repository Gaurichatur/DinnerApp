
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token') != null) {
    return true;
  }
  {
  return inject(Router).navigate(['/login']);
  }
};

