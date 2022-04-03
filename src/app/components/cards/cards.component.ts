import { Component, DoCheck, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Conexion } from 'src/app/backend/conexion';
import { Photo } from 'src/app/model/photo';
import { Post } from 'src/app/model/post';
import { PhotoService } from 'src/app/service/photoservice/photo.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, DoCheck {

  URL:string = Conexion.url;

  @Output()
  modalVisible:EventEmitter<Post> = new EventEmitter();

  @Input()
  post:Post = {}

  photo:Photo = {}

  constructor(private clientePhoto:PhotoService) { 
    console.log("PATH 1:" + JSON.stringify(this.post.photo));
  }
  ngDoCheck(): void {
    this.photo =  ((this.post.photo) as Photo);
    console.log("PATH 3:" + JSON.stringify(this.photo.path));
  }

  ngOnInit(): void {

    this.clientePhoto
    console.log("PATH 2:" + JSON.stringify(this.post.photo));

    //Ya tenemos el POST, ahora recuperamos las imagenes (Plantea duda sobre BBDD, esta bien orquestada???)
//    this.post.photo?.forEach((id)=> {
//      this.clientePhoto.getPhoto(id).subscribe((photo)=> {
//        this.photo.push(photo);
//      });
//    });    
  }

  abrirModal() {
    console.log("Se emitio el evento que abre el MODAL")
    this.modalVisible.emit(this.post);
  }

}
