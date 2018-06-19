import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AllRequests } from '../../services/allRequest';
import { Router, NavigationExtras } from "@angular/router";




@Component({
  selector: 'app-manage-leaves',
  templateUrl: './manage-leaves.component.html',
  styleUrls: ['./manage-leaves.component.css']
})
export class ManageLeavesComponent implements OnInit {

  requests: AllRequests[];
  user: any;
  id: any;

  constructor(
      private requestService:RequestService,
      private flashMessage:FlashMessagesService,
      private router:Router
  ) {}

  ngOnInit() {
       this.requestService.getAllRequest().subscribe(request=>{
          this.requests = request;

       })
  }

  acceptRequest(request:any)
  {
    this.user = request;
    this.id = request._id;
    this.requestService.acceptRequest(this.user).subscribe(res=>{
        if(res.state) {
            var requests = this.requests;
            this.requestService.deleteRequest(this.id).subscribe(data =>{
	            if(data.n==1)
	            {
	              for(var i =0; i< requests.length; i++)
	              {
	                if(requests[i]._id == this.id)
	                {
	                   requests.splice(i,1);
	                }
	              }
	            }
            })
            this.flashMessage.show("Accepted Successfuly" , { cssClass: 'alert-success', times:3000});
            this.router.navigate(['/manageLeaves']);
       }else {
            this.flashMessage.show("Something Went Wrong" , { cssClass: 'alert-danger', times:3000});
            this.router.navigate(['/manageLeaves']);
       } 
    }); 
  }


  deleteRequest(request:any)
  {
    this.user = request;
    this.id = request._id;
    this.requestService.notacceptRequest(this.user).subscribe(res=>{
        if(res.state) {
		    var requests = this.requests;
            this.requestService.deleteRequest(this.id).subscribe(data =>{
	            if(data.n==1)
	            {
	              for(var i =0; i< requests.length; i++)
	              {
	                if(requests[i]._id == this.id)
	                {
	                   requests.splice(i,1);
	                }
	              }
	            }
            })
            this.flashMessage.show("Not Accepted " , { cssClass: 'alert-success', times:3000});
            this.router.navigate(['/manageLeaves']);
        }else {
            this.flashMessage.show("Something Went Wrong" , { cssClass: 'alert-danger', times:3000});
            this.router.navigate(['/manageLeaves']);
        } 
    });   
  }

  viewUser(email:any){
       let navigationExtras: NavigationExtras = {
            queryParams: {
                "email": email
            }
        };
        this.router.navigate(["/viewUser"], navigationExtras);  
  }


}
