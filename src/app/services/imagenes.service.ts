import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as environment from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  private host = environment.host;

  private APIUrlImagenes = this.host + ':3000/api/imagenes';
  private APIUrlImagenesAvatares = this.host + ':3000/api/imagenes/ImagenesAvatares';
  private APIUrlImagenesCromos = this.host + ':3000/api/imagenes/ImagenCromo';
  private APIUrlImagenesColecciones = this.host + ':3000/api/imagenes/ImagenColeccion';
  private APIUrlImagenesPerfil = this.host + ':3000/api/imagenes/ImagenesPerfil';
  private APIUrlImagenesPreguntas = this.host + ':3000/api/imagenes/ImagenesPreguntas';
  private APIUrlImagenesPublicacion = this.host + ':3000/api/imagenes/ImagenesPublicacion';
  private APIUrlFicherosPublicacion = this.host + ':3000/api/imagenes/FicherosPublicacion';
  private APIUrlImagenProfesor = this.host + ':3000/api/imagenes/ImagenProfesor';

  constructor(private http: HttpClient) { }

  //Web Service que comprueba que no haya una imagen en la API con el mismo nombre, ya que si no el
  //archivo no se subirá correctamente. Con este método, comprobamos antes de subir la imagen
  public checkImgNameDuplicated(containerName: string, imgName: string) {
    return this.http.get(this.APIUrlImagenes + '/' + containerName + '/files/'+imgName);
  }

  public getFileNamesContainer(containerName: string){
    return this.http.get(this.APIUrlImagenes + '/' + containerName + '/files');
  }

  /*****************************************************/
  // ******** IMAGENES RECURSO COLECCIONES ***********///
  /*****************************************************/

  /************ DOWNLOAD **************/
  public downloadImgColeccion(imgName: string) {
    return this.http.get(this.APIUrlImagenesColecciones + '/download/' + imgName, {observe: 'body', responseType: 'blob'});
  }

  public downloadImgCromo(imgName: string) {
    return this.http.get(this.APIUrlImagenesCromos + '/download/'+imgName, {observe: 'body', responseType: 'blob'});
  }

  /************ UPLOAD **************/
  public uploadImgColeccion(imgColeccion){
    return this.http.post(this.APIUrlImagenesColecciones + '/upload', imgColeccion);
  }

  public uploadImgCromo(imgCromo){
    return this.http.post(this.APIUrlImagenesCromos + '/upload', imgCromo);
  }

  

  /*****************************************************/
  // ******** IMAGENES RECURSO AVATARES **************///
  /*****************************************************/

  /************ DOWNLOAD **************/
  public downloadImgAvatar(imgName: string) {
    return this.http.get(this.APIUrlImagenesAvatares + '/download/' + imgName, {observe: 'body', responseType: 'blob'});
  }

  /************ UPLOAD **************/
  public uploadImgAvatares(imgAvatares: FormData){
    return this.http.post(this.APIUrlImagenesAvatares + '/upload', imgAvatares);
  }


  /*****************************************************/
  // ******* IMAGENES RECURSO IMÁGENES PERFIL ********///
  /*****************************************************/

  /************ DOWNLOAD **************/
  public downloadImgPerfil(imgName: string) {
    return this.http.get(imgName, {observe: 'body', responseType: 'blob'});
  }

  /************ UPLOAD **************/
  public uploadImgFamiliaImagenes(img: FormData){
    return this.http.post(this.APIUrlImagenesPerfil + '/upload', img);
  }


  /*****************************************************/
  // ******** IMAGENES RECURSO PREGUNTAS **************///
  /*****************************************************/

  /************ DOWNLOAD **************/
  public downloadImgPregunta(imgName: string){  
    return this.http.get(this.APIUrlImagenesPreguntas + '/download/' + imgName, {observe: 'body', responseType: 'blob'});
  }

  /************ UPLOAD **************/
  public uploadImgPregunta(imgPregunta: FormData){
    return this.http.post(this.APIUrlImagenesPreguntas + '/upload', imgPregunta);
  }

  /*****************************************************/
  // ********** IMAGENES PUBLICACIONES ***************///
  /*****************************************************/

  /************ DOWNLOAD **************/
  public downloadImgPublicacion(imgName: string){  
    return this.http.get(this.APIUrlImagenesPublicacion + '/download/' + imgName, {observe: 'body', responseType: 'blob'});
  }

  /************ UPLOAD **************/
  public uploadImgPublicacion(img: FormData){
    return this.http.post(this.APIUrlImagenesPublicacion + '/upload', img);
  }
  

  /*****************************************************/
  // ********** FICHEROS PUBLICACIONES ***************///
  /*****************************************************/

  /************ DOWNLOAD **************/
  public downloadFilePublicacion(fileName: string){  
    return this.http.get(this.APIUrlFicherosPublicacion + '/download/' + fileName, {observe: 'body', responseType: 'blob'});
  }

  /************ UPLOAD **************/
  public uploadFilePublicacion(file: FormData){
    return this.http.post(this.APIUrlFicherosPublicacion + '/upload', file);
  }

  /*****************************************************/
  // ********** CAMBIAR IMAGEN PERFIL ***************///
  /*****************************************************/

  public uploadImgProfesor(imgProfesor){
    return this.http.post(this.APIUrlImagenProfesor + '/upload', imgProfesor);    
  }

  public downloadImgProfesor(fileName){
    return this.http.get(this.APIUrlImagenProfesor + '/download/' + fileName, {observe: 'body', responseType: 'blob'});
  }
}
