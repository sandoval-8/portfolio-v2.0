import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conexion } from 'src/app/backend/conexion';
import { Post } from 'src/app/model/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// ================================================
//          Servicio para datos del Post
// ================================================
export class PostService {

  //url:string = Conexion.url;
  url:string = environment.backend;

  constructor(private httpclient:HttpClient) { }

  //Busca TODOS
  public getAllPost():Observable<Post[]> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    let arrayResponse = this.httpclient.get<any>(this.url + '/post');
    return arrayResponse;
  }

  //Busca por ID
  public getPost(id:number):Observable<Post> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    let arrayResponse = this.httpclient.get<Post>(this.url + '/post/' + id, httpOptions);
    return arrayResponse;
  }
  
}
