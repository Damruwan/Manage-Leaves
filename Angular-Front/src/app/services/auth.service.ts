import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenIsPresent } from 'ng2-bearer';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  authtoken:any;
  authid:any;
  authname:any;
  authlevel:any;
  authemail:any;
  authpost:any;

  constructor(
     private http:Http,
     private router:Router
     
  ) { }

  registerUser(user){

     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post("http://localhost:3000/user/manageUsers",user,{headers:headers}).pipe(map(res=>res.json()));

  }

  loginUser(user){
     
     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return  this.http.post("http://localhost:3000/user/login",user,{headers:headers}).pipe(map(res=>res.json()));

  }


  getProfile(){

     this.fetchToken();
     let headers = new Headers({"Authorization": this.authtoken}) 
     let options = new RequestOptions({ headers: headers}); 
     return this.http.get("http://localhost:3000/user/profile",options).pipe(map(res=>res.json()));

  }

  getUser(){

    return this.http.get('http://localhost:3000/user/manageUsers').pipe(map(res => res.json()));
  }


  getUserToUpdate(id){

    return this.http.get('http://localhost:3000/user/getUser/'+id).pipe(map(res => res.json()));
  }

  updateUser(id,user){

    return this.http.put('http://localhost:3000/user/updateUser/'+id,user).pipe(map(res => res.json()));
  }


  getAllUsers(){

    return this.http.get('http://localhost:3000/user/manageAdmin').pipe(map(res => res.json()));
  }


  deleteUser(id){

    return this.http.delete('http://localhost:3000/user/manageUsers/'+id)
      .pipe(map(res => res.json()));
  }


  fetchToken(){
     const token = localStorage.getItem("tokenid");
     this.authtoken = token;

  }

  fetchId(){
     const id = localStorage.getItem("id");
     this.authid = id;

  }

  fetchName(){
     const name = localStorage.getItem("name");
     this.authname = name;
  }

  fetchLevel(){
     const level = localStorage.getItem("level");
     this.authlevel = level;
  }

  fetchEmail(){
     const email = localStorage.getItem("email");
     this.authemail = email;
  }

  fetchPost(){
     const post = localStorage.getItem("post");
     this.authpost = post;
  }




  storeData(token,id,name,level,email,post){

     localStorage.setItem("tokenid",token);
     localStorage.setItem("id",id);
     localStorage.setItem("name",name);
     localStorage.setItem("level",level);
     localStorage.setItem("email",email);
     localStorage.setItem("post",post);
 
  }

  logout(){

     this.authtoken = null;
     this.user = null;
     localStorage.clear();

  }


  loggedIn() {
    this.fetchToken();
    if(this.authtoken != null ){
       return true;
    }

  }

  getAuthName(){
     this.fetchName();
     return this.authname;
  }

  getAuthId(){
     this.fetchId();
     return this.authid;
  }

  getAuthEmail(){
     this.fetchEmail();
     return this.authemail;
  }
  
  getAuthPost(){
     this.fetchPost();
     return this.authpost;
  }

  isHead(){
     this.fetchLevel();
     if(this.authlevel == '0'){
        return true;
     }  
  }

  isAdmin(){
     this.fetchLevel();
     if(this.authlevel == '1'){
        return true;
     }  
  }

  isStaff(){
     this.fetchLevel();
     if(this.authlevel == '2'){
        return true;
     }  
  }


}
