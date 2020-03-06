import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  constructor( private postsservice: PostsService) {}

  ngOnInit() {
    this.siguientes();
  }

  recargar( event ) {
    this.siguientes(event, true);
  }

  siguientes(event?, pull: boolean = false) {
    this.postsservice.getPosts(pull).subscribe( resp => {
      console.log(resp);
      this.posts.push(...resp.posts);
      if (event) {
        event.target.complete();
        if ( resp.posts.length === 0 ) {
          event.target.disabled = true;
        }
      }
    });
  }

}

