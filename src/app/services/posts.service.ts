import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts, Post } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { resolve } from 'url';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPost = 0;
  nuevoPost = new EventEmitter<Post>();

  constructor(private http: HttpClient,
              private usuarioservice: UsuarioService) { }

  getPosts(pull: boolean = false) {
    if (pull) {
      this.paginaPost = 0;
    }
    this.paginaPost ++;

    return this.http.get<RespuestaPosts>(`${URL}/posts/?pagina=${this.paginaPost}`);
  }

  crearPost(post) {
    const headers = new HttpHeaders ({
      'x-token': this.usuarioservice.token
    });

    return new Promise( resolve => {
      this.http.post(`${URL}/posts`, post, {headers}).subscribe( resp => {
        console.log(resp);
        this.nuevoPost.emit( resp['post']);
        resolve(true);
      });
    });

  }
}
