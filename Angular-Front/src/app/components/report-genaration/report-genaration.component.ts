import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, NavigationExtras } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { Users } from '../../services/user';

@Component({
  selector: 'app-report-genaration',
  templateUrl: './report-genaration.component.html',
  styleUrls: ['./report-genaration.component.css']
})
export class ReportGenarationComponent implements OnInit {
   
   users: Users[];

  constructor(
      private authService:AuthService,
      private flashMessage:FlashMessagesService,
      private router:Router
  ) { }

  ngOnInit() {
       this.authService.getUser().subscribe(user=>{
          this.users = user;

       })
  }

  viewLeavesAll(id:any,email:any){
       let navigationExtras: NavigationExtras = {
            queryParams: {
                "id":id,
                "email":email       
            }
        };
        this.router.navigate(["/createPDF"], navigationExtras);  
  }

}
