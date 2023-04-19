import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { StockService } from 'app/services/stock.service';
import { Router } from '@angular/router';
import { Stockin } from 'app/class/stockin';

@Component({
  selector: 'app-inventoryinform',
  templateUrl: './inventoryinform.component.html',
  styleUrls: ['./inventoryinform.component.scss']
})
export class InventoryinformComponent implements OnInit {

  name = 'Angular';
  productForm: FormGroup;

  constructor(private fb:FormBuilder,
    private stockService:StockService,
    private router:Router) 
    
    {
    this.productForm = this.fb.group({
      from: '',
      recivedBy:'',
      recivedDate:'',
      totalQty:'',
      totalProduct:'',
      totalPrice:'',
      isApproved:'',
      stockInventoryItems: this.fb.array([]) ,
    });
  }

  stockin?:Stockin[];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  quantities() : FormArray {
    return this.productForm.get("stockInventoryItems") as FormArray
  }
  newQuantity(): FormGroup {
    return this.fb.group({
      productName: '',
      productQty: '',
      price: '',
      totalPrice: '',
    })
  }
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
     userData:any;
  onSubmit() {
    console.log(this.productForm.value);
    this.userData=this.productForm.value;
    this.stockService.postData(this.productForm.value).subscribe((data:any)=>{
     this.userData=data;
     this.router.navigate(['inventoryin']);
    })
  }

  getAllStockes(){
    this.stockService.getAllLogistics().subscribe(data=>{
      this.stockin=data;
    });
  }

}
