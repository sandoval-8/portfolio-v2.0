import { Component, DoCheck, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { pipe, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Conexion } from 'src/app/backend/conexion';
import { Photo } from 'src/app/model/photo';
import { Post } from 'src/app/model/post';
import { PhotoService } from 'src/app/service/photoservice/photo.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  URL:string = Conexion.url;

  URL_PHOTO:string = '';

  @Output()
  modalVisible:EventEmitter<Post> = new EventEmitter();

  @Input()
  post:Post = {} //

  photo:Photo = {}

  photoProfile:Photo = {}; //

  constructor(private clientePhoto:PhotoService) {
  }

  //Cuando llega un input nuevo Llama a la foto
  ngOnInit(): void {
    this.clientePhoto.searchProfilePhoto(this.post.id!).subscribe((photos)=>{
      this.photo = photos[0];
      this.URL_PHOTO = this.URL + "/photo/" + this.photo.nameResource;
    }
    ).unsubscribe;
  }
  
  abrirModal() {
    this.modalVisible.emit(this.post);
  }

}
