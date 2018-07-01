import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RequestService } from '../../services/request.service';
import { UserHistory } from '../../services/userHistory';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.css']
})
export class CreatePDFComponent implements OnInit {

   history: UserHistory[];
   public id: string;
   public email: string;
   user:any;

  constructor(
     private route: ActivatedRoute,
     private requestService: RequestService,
     private authService: AuthService,
     private router: Router
  ) { 
     this.route.queryParams.subscribe(params => {
            this.id = params["id"];
            this.email = params["email"];
        });
  }

  ngOnInit() {
     
     this.authService.getUserToUpdate(this.id).subscribe(user=>{
          this.user = user;
     });
     
     this.requestService.viewHistory(this.email).subscribe(user=>{
          this.history = user;
     });

  }
  
  @ViewChild('content') content: ElementRef;
  public downloadPFD() {
     let doc = new jsPDF();
     let specialElementHandlers = {
       '#editor': function(element, renderer) {
          return true;
       }
     };
     let content = this.content.nativeElement;
     doc.fromHTML(content.innerHTML, 15, 15, {
          'width':190,
          'elementHandlers': specialElementHandlers
     });
     doc.save(this.user.full_name);
  }


  redirectBack(){
     this.router.navigate(['/reportGenaration']);
  }

}
