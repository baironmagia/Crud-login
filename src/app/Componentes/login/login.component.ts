import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading= false;
  form: FormGroup;

  constructor(
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
    ){
    this.form=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit():void{

  }
  Ingresar(){
    console.log(this.form)
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;
    console.log(usuario,password)

    if (usuario=='usu' && password=='123'){
      // redireccionamos al dashboard
      this.fakeLoading();
    }
    else{
      // mostramos alerta de error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open(
      'Usuario o contraseña ingresado son invalidos',
      '',
      {
        duration:5000,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      }
    )
  }
  fakeLoading(){
    this.loading=true;
    setTimeout(()=>{
      this.router.navigate(['dashboard']);
    },1500);
  }
}
