import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Requests } from '../../services/request';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-request-leaves',
  templateUrl: './request-leaves.component.html',
  styleUrls: ['./request-leaves.component.css']
})
export class RequestLeavesComponent implements OnInit {
  
  requests: Requests[];
  email = this.authService.getAuthEmail();
  name = this.authService.getAuthName();
  post = this.authService.getAuthPost();

  date:String;
  reason:String;
  describe:String;

  constructor(
      private requestService:RequestService,
      private authService:AuthService,
      private flashMessage:FlashMessagesService,
      private router:Router
  ) { }

  ngOnInit() {
  
     this.requestService.getRequest(this.email).subscribe(request=>{
          this.requests = request;

       })
  }

  request(){
    const request = {
       name:this.name,
       post:this.post,
       email:this.email,
       date:this.date,
       reason:this.reason,
       describe:this.describe
    };
    this.requestService.sendRequest(request).subscribe(request=>{
         this.requests.push(request);
         this.requestService.getRequest(this.email).subscribe(request=>{
             this.requests = request;
         }); 
    }); 
  
  }

  deleteRequest(id:any)
  {
    var request = this.requests;
    this.requestService.deleteRequest(id).subscribe(data =>{
            if(data.n==1)
            {
              for(var i =0; i< request.length; i++)
              {
                if(request[i]._id == id)
                {
                   request.splice(i,1);
                }
              }
            }
     })
  }
  
}

