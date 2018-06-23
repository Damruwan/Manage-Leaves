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
  username:String;
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

   registerData(){
    
    const user = {
       full_name:this.full_name,
       post:'staff',
       phone:this.phone,
       username:this.username,
       email:this.email,
       password:this.password,
       state:'2'
    };

    this.authService.registerUser(user).subscribe(user=>{
         this.users.push(user);
         this.authService.getUser().subscribe(user=>{
             this.users = user;
         }); 
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
