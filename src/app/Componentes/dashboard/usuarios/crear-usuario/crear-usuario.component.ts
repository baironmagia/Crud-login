import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  sexos: any[] = ['Femenino', 'Masculino'];
  form! :FormGroup;

  constructor(
    private fb:FormBuilder,
    private _usuarioServices:UsuarioService,
    private router:Router,
    private _snackBar: MatSnackBar
  ){
    this.form=this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      sexo:['',Validators.required],
    })
  }
  agregarUsuario(){
    const user:Usuario={
      userName:this.form.value.userName,
      password:this.form.value.password,
      nombre:this.form.value.nombre,
      apellido:this.form.value.apellido,
      sexo:this.form.value.sexo
    }
    this._usuarioServices.agregarUsuario(user);
    this._snackBar.open('El usuario se agrego exito','',
      {
        duration:1500,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      }
    )
    this.router.navigate(['/dashboard/usuario']);
  }
}
