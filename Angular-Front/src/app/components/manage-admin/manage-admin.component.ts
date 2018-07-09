import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, NavigationExtras } from "@angular/router";
import { Users } from '../../services/user';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {
   
  users: Users[];
  
  full_name:String;
  phone:String;
  email:String;
  password:String;
  state:String;

  post:String;

  constructor(

      private authService:AuthService,
      private flashMessage:FlashMessagesService,
      private router:Router

  ) { }

  ngOnInit() {

      this.authService.getAllUsers().subscribe(user=>{
          this.users = user;

      })
  }

   registerData(form){
    
    this.checkPost(form);
    const user = {
       full_name:form.value.full_name,
       post:this.post,
       phone:form.value.phone,
       email:form.value.email,
       password:form.value.password,
       state:form.value.state
    };

    this.authService.registerUser(user).subscribe(user=>{
        if(user.state){
	        this.users.push(user);
	        this.authService.getAllUsers().subscribe(user=>{
	            this.users = user;
	        });
	    }else{
	       this.flashMessage.show(user.msg , { cssClass: 'alert-danger', times:3000});
	    }      
    });   
  
  }

  checkPost(form){
     if(form.value.state == '0'){
        this.post = 'head';
     }else if(form.value.state == '1'){
        this.post = 'admin';
     }else if(form.value.state == '2'){
        this.post = 'staff';
     }

  }

  deleteUser(id:any)
  {
    var user = this.users;
    this.authService.deleteUser(id).subscribe(data =>{
            if(data.n==1)
            {
              for(var i =0; i< user.length; i++)
              {
                if(user[i]._id == id)
                {
                   user.splice(i,1);
                }
              }
            }
        })
  }

   updateUser(id:any){
       let navigationExtras: NavigationExtras = {
            queryParams: {
                "id": id
            }
        };
        this.router.navigate(["/updateUser"], navigationExtras);  
  }


}
