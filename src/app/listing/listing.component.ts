import { GroceryServiceService } from '../grocery-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private groceryService : GroceryServiceService, private router:Router) { }
  groceryLists:any;
  ngOnInit(): void {
    this.getAllItem();
  }

  getAllItem(){
    this.groceryService.getAllItems().subscribe((resp)=>{
        this.groceryLists = resp;
    })
  }

  Landing(card:any){
    console.log(card.id);
    this.router.navigate(['/landing',card.id]);
  }

}
