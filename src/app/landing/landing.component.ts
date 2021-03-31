import { GroceryServiceService } from './../grocery-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  product_id: any;
  data:any;
  product: any;


  
  constructor(private actRoute: ActivatedRoute,private router: Router ,private commonService:GroceryServiceService) { }


  ngOnInit(): void {
    let p_id = parseInt(this.actRoute.snapshot.params.id);
    this.product_id = p_id;
    console.log(p_id);
    this.getOneItem();
  };

  
  getOneItem(){
    this.commonService.getOneItem(this.product_id).subscribe(resp=>{
      this.data =resp;
    console.log(this.data);
    console.log(this.product_id);

    });
  };

  add(product:any) {

    let mydata={
      itemId:product.id,
      itemName:product.name,
      itemImage:product.image
    }

    this.commonService.addToCart(mydata);
    this.router.navigate(['/cart-page']);
  } 

}
