import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Photo } from 'src/app/model/photo';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/postservice/post.service';

@Component({
  selector: 'app-body-test',
  templateUrl: './body-test.component.html',
  styleUrls: ['./body-test.component.css']
})
export class BodyTestComponent implements OnInit {

  modalVisible: boolean = false;
  posts:Post[] = [];
  photos:Photo[] = [];
  openModalPost:Post = {}
  allPost:Subscription = new Subscription();

  constructor(private postClient:PostService) { }

  ngOnInit(): void {
    //Busca todos los posteos
    this.allPost = this.postClient.getAllPost().subscribe((responsePosts) => {
      this.posts = responsePosts;      
    });
  }
  
  //Muestra el modal
  modalIsVisible(evento?:Post) {
    if(evento != undefined){
      this.openModalPost = evento;
    }    
    this.modalVisible = !this.modalVisible;
  }

}
