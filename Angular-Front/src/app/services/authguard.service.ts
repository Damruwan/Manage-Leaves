import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(
      private authService:AuthService,
      private router:Router
  ) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let roles = route.data["roles"] as Array<string>;
      if(this.authService.loggedIn()){
         if(this.authService.isHead()){
             if((roles[0] == 'Head') || (roles[0] == 'Head&Admin') || (roles[0] == 'All')){
                 return true;
             }else{
                 this.router.navigate(['/']);
                 return false;
             }
         }else if(this.authService.isAdmin()){
             if((roles[0] == 'Admin') || (roles[0] == 'Head&Admin') || (roles[0] == 'Admin&Staff') || (roles[0] == 'All')){
                 return true;
             }else{
                 this.router.navigate(['/']);
                 return false;
             }    
         }else if(this.authService.isStaff()){
             if((roles[0] == 'Admin&Staff') || (roles[0] == 'All')){
                 return true;
             }else{
                 this.router.navigate(['/']);
                 return false;
             }    
         }else{
             this.router.navigate(['/']);
             return false;
         }

      }else{
         this.router.navigate(['/']);
         return false;
      }
             
  }

}
