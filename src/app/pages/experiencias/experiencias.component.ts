import { SesionService } from './../../services/sesion.service';
import { Profesor } from './../../clases/Profesor';
import { AuthService } from './../../services/auth.service';
import { PublicacionesService } from './../../services/publicaciones.service';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/clases/Publicacion';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit {
  
  isCollapsed = true;
  focus1;
  focus2;

  publicaciones;

  isLogged;
  profesor;

  sndbtn;

  constructor(private auth: AuthService,private publiService: PublicacionesService, private sesion: SesionService) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()) {
      this.isLogged = true;
      this.profesor = this.sesion.DameProfesor();
      if(this.profesor == undefined) {
        sessionStorage.removeItem("ACCESS_TOKEN");
        this.isLogged = false;
      }
    }
    else this.isLogged = false;
    
    this.publiService.damePublicaciones().subscribe(data => {
      console.log('publicaciones: '+data);
      if(data != undefined){
        this.publicaciones = data;
      }
    });   
  }

  send(publiId: number){
    console.log('entra send '+publiId);   
    if((<HTMLInputElement>document.getElementById(publiId.toString())).value.length != 0){
      const comentario = (<HTMLInputElement>document.getElementById(publiId.toString())).value;
      console.log(comentario);
    }
  }
}
