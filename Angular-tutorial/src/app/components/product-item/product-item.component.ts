import { Component, OnInit } from '@angular/core';

interface Product{
  sno:string;
  name:string;
  image:string;
  qty:number;
  price:number;
}


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  constructor() { }


  public product:Product = {
    sno: "A78542",
    name: "MI Watch",
    image: "/assets/img/whatch.jpg",
    qty: 2,
    price: 1500,
  }



  ngOnInit(): void {
  }

  public incrementQty():void{
    this.product = {
      ...this.product,
      qty: this.product.qty + 1
    };
  }
  public decrementQty():void{
    this.product = {
      ...this.product,
      qty: (this.product.qty - 1 > 1) ? this.product.qty - 1 : 1
    };
  }

}
