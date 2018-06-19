import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
     private http:Http,
     private router:Router

  ) { }

  sendRequest(request){

     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post("http://localhost:3000/request/manageRequest",request,{headers:headers}).pipe(map(res=>res.json()));

  }

   getRequest(email){

    return this.http.get('http://localhost:3000/request/manageRequest/'+email).pipe(map(res => res.json()));
  }

   viewHistory(email){

    return this.http.get('http://localhost:3000/request/viewHistory/'+email).pipe(map(res => res.json()));
  }

  
   deleteRequest(id){

    return this.http.delete('http://localhost:3000/request/manageRequest/'+id)
      .pipe(map(res => res.json()));
  }


   getAllRequest(){

    return this.http.get('http://localhost:3000/request/manageRequest').pipe(map(res => res.json()));
  }

   acceptRequest(request){

     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post("http://localhost:3000/request/acceptRequest",request,{headers:headers}).pipe(map(res=>res.json()));

  }

   notacceptRequest(request){

     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post("http://localhost:3000/request/notacceptRequest",request,{headers:headers}).pipe(map(res=>res.json()));

  }


}
