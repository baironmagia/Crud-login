import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../Interfaces/menu';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http:HttpClient) { }

  getMenu(): Observable<Menu[]>{
    return this.http.get<Menu[]>('../../assets/Data/menu.json');
  }
}
