import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RequestService } from '../../services/request.service';
import { UserHistory } from '../../services/userHistory';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
  
  history: UserHistory[];
  email:any;

  constructor(
     
     private authService:AuthService,
     private requestService: RequestService

  ) { }

  ngOnInit() {

       this.email = this.authService.getAuthEmail();
       this.requestService.viewHistory(this.email).subscribe(user=>{
          this.history = user;
       });
            
  }

}
