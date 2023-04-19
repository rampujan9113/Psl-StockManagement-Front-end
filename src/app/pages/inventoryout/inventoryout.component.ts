import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stockin } from 'app/class/stockin';
import { StockService } from 'app/services/stock.service';
import { log } from 'console';

@Component({
  selector: 'app-inventoryout',
  templateUrl: './inventoryout.component.html',
  styleUrls: ['./inventoryout.component.scss']
})
export class InventoryoutComponent implements OnInit {

  constructor(private router:ActivatedRoute,private stockService:StockService) { }
id:any
products:any;
name:any;
  ngOnInit(): void {
 this.id= this.router.snapshot.params['id'];
 console.log(this.id);
 this.stockService.getByIdProduct(this.id).subscribe((data:any)=>{
   this.products=data.stockInventoryItems;
   this.name=data.from;
   for (const iterator of this.products) {
    console.log(iterator);
    
   }
 })
 
  }

  stockin?:Stockin[];

}
