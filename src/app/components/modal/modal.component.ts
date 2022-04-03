import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Conexion } from 'src/app/backend/conexion';
import { Post } from 'src/app/model/post';

interface post {

}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output()
  modalVisible:EventEmitter<null> = new EventEmitter();

  @Input()
  post:Post = {}

  URL:string = Conexion.url;

//  photo:Photo[] = []

  constructor() { }

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
