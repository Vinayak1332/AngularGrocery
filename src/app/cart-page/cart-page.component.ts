import { GroceryServiceService } from './../grocery-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {


  constructor(private groceryService:GroceryServiceService) { }
  data:any;
  totalAmount:number=0;
  totalLength: any;

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.groceryService.getAllItem().subscribe((resp)=>{
      this.data = resp;
    this.totalPrice();
    })
  };

  totalPrice(){
    console.log(this.data.length);
    length = this.data.length;
    this.totalLength = length;
    console.log(typeof this.data[0].price);

    for(let i=0;i<length;i++){
      this.totalAmount += this.data[i].price;
    }
    console.log(this.totalAmount)
  }

  deleteItem(cart:any){
    location.reload();
    this.groceryService.deleteCartItems(cart).subscribe(()=>{

      this.getItems();
    })
  }
}
