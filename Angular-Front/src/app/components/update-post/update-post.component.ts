import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  
  public id: string;
  
  name:String;
  post:String;
  email:String;
  about:String;
  date:String;
  content:String;
  
  constructor(
     private route: ActivatedRoute,
     private postService: PostService,
     private flashMessage:FlashMessagesService,
     private router: Router

  ) {
      this.route.queryParams.subscribe(params => {
            this.id = params["id"];
        });
   }

  ngOnInit() {

      this.postService.getPostToUpdate(this.id).subscribe(post=>{
          this.name = post.name,
          this.post = post.post,
          this.email = post.email,
		  this.about = post.about,
		  this.date = post.date,
		  this.content = post.content
     });

  }

  updateData(){
     const post = {
       name:this.name,
       post:this.post,
       email:this.email,
       about:this.about,
       date:this.date,
       content:this.content
    };

    this.postService.updatePost(this.id,post).subscribe(res=>{
       if(res) {
            this.flashMessage.show("Update Successfuly" , { cssClass: 'alert-success', times:3000});
            this.router.navigate(['/addPost']);
            
       }else {
            this.flashMessage.show("Something Went Wrong" , { cssClass: 'alert-danger', times:3000});
            this.router.navigate(['/addPost']);
       } 
    });   

  }

  redirectBack(){
     this.router.navigate(['/addPost']);
  }

}
