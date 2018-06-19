import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RequestService } from '../../services/request.service';
import { UserHistory } from '../../services/userHistory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
   
   history: UserHistory[];
   public email: string;

  constructor(
     private route: ActivatedRoute,
     private requestService: RequestService,
     private router: Router
  ) {
     this.route.queryParams.subscribe(params => {
            this.email = params["email"];
        });
   }

  ngOnInit() {
     
     this.requestService.viewHistory(this.email).subscribe(user=>{
          this.history = user;
     });
  }

  redirectBack(){
     this.router.navigate(['/manageLeaves']);
  }

}
