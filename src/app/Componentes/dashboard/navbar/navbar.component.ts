import { Component } from '@angular/core';
import { Menu } from 'src/app/Interfaces/menu';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menu:Menu[]=[];

  constructor(private _menuService:MenuService){}
  ngOnInit():void{
    this.cargarMenu();
  }
  cargarMenu(){
    this._menuService.getMenu().subscribe(data=>{
      console.log(data);
      this.menu=data;
    })
  }


}
