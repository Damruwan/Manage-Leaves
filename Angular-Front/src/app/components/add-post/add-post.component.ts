import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { PostService } from '../../services/post.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Post } from '../../services/post';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  posts: Post[];
  email = this.authService.getAuthEmail();
  name = this.authService.getAuthName();
  post = this.authService.getAuthPost();

  about:String;
  date:String;
  content:String;

  constructor(
      private postService:PostService,
      private authService:AuthService,
      private flashMessage:FlashMessagesService,
      private router:Router
  ) { }

  ngOnInit() {
     this.postService.getAllPost().subscribe(request=>{
          this.posts = request;

       })
  }

  addPost(form){
    const post = {
       name:this.name,
       post:this.post,
       email:this.email,
       about:form.value.about,
       date:form.value.date,
       content:form.value.content
    };
    this.postService.sendPost(post).subscribe(request=>{
         this.posts.push(request);
         this.postService.getAllPost().subscribe(request=>{
             this.posts = request;
         }); 
    }); 
  
  }

   deletePost(id:any)
  {
    var post = this.posts;
    this.postService.deletePost(id).subscribe(data =>{
            if(data.n==1)
            {
              for(var i =0; i< post.length; i++)
              {
                if(post[i]._id == id)
                {
                   post.splice(i,1);
                }
              }
            }
     })
  }

   updatePost(id:any){
       let navigationExtras: NavigationExtras = {
            queryParams: {
                "id": id
            }
        };
        this.router.navigate(["/updatePost"], navigationExtras);  
  }

}
