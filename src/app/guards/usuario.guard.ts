import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements /* CanActivate */ CanLoad {
  constructor(private usuarioservice: UsuarioService) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.usuarioservice.validaToken();
  }

  /* canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  } */

}

