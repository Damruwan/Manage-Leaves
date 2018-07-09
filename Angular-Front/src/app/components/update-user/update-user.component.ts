import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
   
  public id: string;
  updatedUser:any;

  full_name:String;
  post:String;
  phone:String;
  email:String;
  password:String;
  state:String;

  beforeState:String;

  constructor(
     private route: ActivatedRoute,
     private authService: AuthService,
     private flashMessage:FlashMessagesService,
     private router: Router

  ) { 
     this.route.queryParams.subscribe(params => {
            this.id = params["id"];
        });
  }

  ngOnInit() {

     this.authService.getUserToUpdate(this.id).subscribe(user=>{
          this.full_name = user.full_name,
		  this.phone = user.phone,
		  this.email = user.email,
		  this.password = user.password,
		  this.state = user.state,
		  this.beforeState = user.state
     });
  }

  updateData(){

     this.checkPost();
     const user = {
       full_name:this.full_name,
       post:this.post,
       phone:this.phone,
       email:this.email,
       password:this.password,
       state:this.state
    };

    this.authService.updateUser(this.id,user).subscribe(res=>{
       if(res) {
          if((this.beforeState != this.state) && (this.id == this.authService.getAuthId())){
            this.flashMessage.show("Your Level Update Successfuly Please Login as the new Role" , { cssClass: 'alert-success', times:3000});
            this.authService.logout();
            this.router.navigate(['/login']);
          }else{
            this.flashMessage.show("Update Successfuly" , { cssClass: 'alert-success', times:3000});
            this.router.navigate(['/manageAdmin']);
          }  
       }else {
            this.flashMessage.show("Something Went Wrong" , { cssClass: 'alert-danger', times:3000});
            this.router.navigate(['/manageAdmin']);
       } 
    });   

  }

  redirectBack(){
     this.router.navigate(['/manageAdmin']);
  }

  checkPost(){
     if(this.state == '0'){
        this.post = 'head';
     }else if(this.state == '1'){
        this.post = 'admin';
     }else if(this.state == '2'){
        this.post = 'staff';
     }

  }

}
