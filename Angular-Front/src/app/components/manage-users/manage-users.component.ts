import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Users } from '../../services/user';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

users: Users[];
  
  full_name:String;
  phone:String;
  email:String;
  password:String;

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

   registerData(form){
    const user = {
       full_name:form.value.full_name,
       post:'staff',
       phone:form.value.phone,
       email:form.value.email,
       password:form.value.password,
       state:'2'
    };

    this.authService.registerUser(user).subscribe(user=>{
         if(user.state){
             this.users.push(user);
             this.authService.getUser().subscribe(user=>{
                 this.users = user;
             }); 
         }else{
             this.flashMessage.show(user.msg , { cssClass: 'alert-danger', times:3000});
         } 
    });   
  
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

}
