import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryServiceService {

  url = "http://localhost:3000/groceryLists";
  urll = "http://localhost:3000/cartItems";

  constructor(private _http:HttpClient) { }

  getAllItems(){
    return this._http.get(this.url);
  }

  getOneItem(id: any){
    return this._http.get('http://localhost:3000/groceryLists/'+id);
  }

  addToCart(mydata:any) {
    this._http.post(this.urll,mydata).subscribe();
  }

  getAllItem() {
    return this._http.get(this.urll);
  }

  deleteCartItems(cart:any) {
    return this._http.delete(this.urll+"/"+cart.id)
  }

}
