import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/model/photo';
import { Conexion } from 'src/app/backend/conexion';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URL:string = Conexion.url; //  http:localhost:8080/post/{id}

  constructor(private cliente:HttpClient) { }

  getPhoto(id:number):Observable<Photo> {
    return this.cliente.get<Photo>(this.URL + "/" + id);
  }
  
}
