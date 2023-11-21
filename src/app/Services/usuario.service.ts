import { Injectable } from '@angular/core';
import { Usuario } from '../Interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApi='https://localhost:7176/Api/Login';
  ListUsuarios: Usuario[] =[];
  
  constructor(private http: HttpClient) { }

  getUsuario():Observable<any>{
    return this.http.get<any>(this.urlApi);
  }
  eliminarUsuario(index: number){
    this.ListUsuarios.splice(index,1);
  }
  agregarUsuario(user:Usuario){
    this.ListUsuarios.unshift(user);
  }
}
