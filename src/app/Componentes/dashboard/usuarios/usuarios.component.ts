import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioService } from 'src/app/Services/usuario.service';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
  listaUsuario: Usuario[]=[];

  displayedColumns: string[] = ['userName','password','nombre', 'apellido', 'sexo','acciones'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private _suarioService:UsuarioService,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }
  cargarUsuarios(){
    console.log("Lista vacia: ",this.listaUsuario);
    this._suarioService.getUsuario().subscribe(data=>{
      this.listaUsuario=data;
      console.log("LIsta llena: ",this.listaUsuario);
    });
    

    this.dataSource= new MatTableDataSource(this.listaUsuario);
    console.log("DataSource: ",this.dataSource);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarUsuario(index:number){
    this._suarioService.eliminarUsuario(index);
    this.cargarUsuarios();

    this._snackBar.open('El usuario se elimino con exito','',
      {
        duration:1000,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      }
    ) 
  }
}
