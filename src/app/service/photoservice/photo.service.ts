import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/model/photo';
import { Conexion } from 'src/app/backend/conexion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  //URL:string = Conexion.url; //  http:localhost:8080/post/{id}
  URL_BACKEND:string = environment.backend; // http:localhost:8080

  constructor(private cliente:HttpClient) { }

  // 'id' es el ID del POST del cual queremos recuperar las fotos asociadas.
  getPhoto(idPost:number):Observable<Photo[]> {
    return this.cliente.get<Photo[]>(this.URL_BACKEND + "/photo/lista/" + idPost);
  }

  //Es exactamente el mismo metodo que 'getPhoto(idPost:number);'
  searchProfilePhoto(idPost:number):Observable<Photo[]>{
    return this.cliente.get<Photo[]>(this.URL_BACKEND + "/photo/lista/" + idPost)
  /*.pipe(
      map(photos => 
        photos.filter((photo)=>{
          photo.profile===true
        })
        
      ));
    )*/
  }
  
}
