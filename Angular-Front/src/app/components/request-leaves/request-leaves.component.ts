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

  request(form){
    const request = {
       name:this.name,
       post:this.post,
       email:this.email,
       date:form.value.date,
       reason:form.value.reason,
       describe:form.value.describe
    };
    this.requestService.sendRequest(request).subscribe(request=>{
         if(request.state){
             this.requests.push(request);
             this.requestService.getRequest(this.email).subscribe(request=>{
                 this.requests = request;
             });
         }else{
             this.flashMessage.show(request.msg , { cssClass: 'alert-danger', times:3000});
         }     
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

