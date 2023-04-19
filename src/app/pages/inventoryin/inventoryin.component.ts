import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Stockin } from 'app/class/stockin';
import { StockService } from 'app/services/stock.service';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-inventoryin',
  templateUrl: './inventoryin.component.html',
  styleUrls: ['./inventoryin.component.scss']
})
export class InventoryinComponent implements OnInit {
  openModel = {
    create: false
  }
  heading: any;
  @ViewChild('myModal') myModal: ElementRef;

  constructor(private stockService:StockService ,private router:Router) { }

  ngOnInit(): void {
    this.getAllStockes();
  }

  stockin?:Stockin[];

  openModal() {
    this.myModal.nativeElement.classList.add('show');
    this.myModal.nativeElement.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.myModal.nativeElement.classList.remove('show');
    this.myModal.nativeElement.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  

  getAllStockes(){
    this.stockService.getAllStock().subscribe(data=>{
      this.stockin=data;
    });
  }

  open(){
    const modelDiv=document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='block';
    }
  }
  close(){
    const modelDiv=document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='none';
    }
  }

  productList(id:any){
console.log(id);
   this.router.navigate(['inventoryout',id])
  }


}
