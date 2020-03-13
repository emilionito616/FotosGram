import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {};

  constructor( private usuarioservice: UsuarioService,
               private uiService: UiServiceService) {}

  ngOnInit() {
    this.usuario = this.usuarioservice.getUsuario();
  }

  async actualizar(fActualizar: NgForm) {
    if (fActualizar.invalid) { return; }
    const actualizado = await this.usuarioservice.actualizarUsuario(this.usuario);
    if (actualizado) {
      //toast con el mensaje de actualizado
      this.uiService.presentToast('Registro Actualizado');
    } else {
      //toast con el error
      this.uiService.presentToast('Error al Acrualizar');
     }
  }


  logout() {

  }

}
