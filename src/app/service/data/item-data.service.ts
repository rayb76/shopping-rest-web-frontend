import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITEM_JPA_API_URL } from 'src/app/app.constants';
import { Item } from 'src/app/list-shop/list-shop.component';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(
    private http:HttpClient) { }

  retrieveAllItems(username: any){
    return this.http.get<Item[]>(`${ITEM_JPA_API_URL}/users/${username}/items`);
    //console.log("Execute Hello World Bean Service");
  }

  deleteItem(username: string, id: any){
    return this.http.delete(`${ITEM_JPA_API_URL}/users/${username}/items/${id}`);

  }

  retrieveItem(username: any, id: any){
    return this.http.get<Item>(`${ITEM_JPA_API_URL}/users/${username}/items/${id}`);

  }

  updateItem(username: any, id: any, item: any){
    return this.http.put(`${ITEM_JPA_API_URL}/users/${username}/items/${id}`, item);

  }

  createItem(username: any, item: any){
    return this.http.post(`${ITEM_JPA_API_URL}/users/${username}/items`, item);
  }

}
