import { Component, DoCheck, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Conexion } from 'src/app/backend/conexion';
import { Photo } from 'src/app/model/photo';
import { Post } from 'src/app/model/post';
import { PhotoService } from 'src/app/service/photoservice/photo.service';
import { environment } from 'src/environments/environment';

interface post {

}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, DoCheck {

  @Output()
  modalVisible:EventEmitter<null> = new EventEmitter();

  @Input()
  post:Post = {}

  URL_REQUEST_IMG:string = environment.backend + "/photo/";

  photo:Photo[] = [];
  photos:Array<Photo> = new Array();

  constructor(private clientePhoto:PhotoService) { }

  ngDoCheck(): void {
  //  this.photo =  ((this.post.photo) as Photo);
  //  this.URL_PHOTO = this.URL + "/photo/" + this.photo.nameResource;
  this.clientePhoto.getPhoto(this.post.id!).subscribe((photos) => {
    this.photo = photos;
  }).unsubscribe;
 // this.URL_PHOTO.push(this.URL + "/photo/" + this.photo.nameResource);
  }

  ngOnInit(): void {
  }

  @HostListener('document:keydown.escape', ['$event'])
  abrirModal(evt: KeyboardEvent) {
    this.modalVisible.emit();
  }

  nextSlide(nextValue:string) {

    var carrousel = document.getElementById("carrouselSlider");
    var position = 0;

    if(nextValue=='_DER'){ // <<============
      if(carrousel!==null){
        position = (this.parseNumber(carrousel.style.left) + 100);
        var translate = this.parseString(position);
        carrousel.style.left=translate;
      }      
    } else if(nextValue=='_IZQ'){ // <<============
      if(carrousel!==null){
        position = (this.parseNumber(carrousel.style.left) - 100);
        var translate = this.parseString(position);
        console.log(translate);
        carrousel.style.left=translate;
      }
    }
  }

  private parseNumber(value:string): number {
    return Number(value.replace('%',''));
  }

  private parseString(value:number): string{
    return String(value + "%");
  }
}
