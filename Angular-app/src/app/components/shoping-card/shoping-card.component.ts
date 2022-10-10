import { Component, OnInit } from '@angular/core';

interface Product{
  sno:string;
  name:string;
  image:string;
  qty:number;
  price:number;
}

@Component({
  selector: 'app-shoping-card',
  templateUrl: './shoping-card.component.html',
  styleUrls: ['./shoping-card.component.css']
})
export class ShopingCardComponent implements OnInit {

  constructor() { }

  public products:Product[] = [
    {
      sno: "A78542",
      name: "MI Watch",
      image: "/assets/img/whatch.jpg",
      qty: 2,
      price: 1500,
    },
    {
      sno: "NM8542",
      name: "Smart Watch",
      image: "/assets/img/whatch2.jpg",
      qty: 5,
      price: 1230,
    },
    {
      sno: "A78562",
      name: "MI Watch",
      image: "/assets/img/whatch.jpg",
      qty: 2,
      price: 1500,
    },
    {
      sno: "NM4242",
      name: "Smart Watch",
      image: "/assets/img/whatch2.jpg",
      qty: 5,
      price: 1230,
    },
    {
      sno: "A73242",
      name: "MI Watch",
      image: "/assets/img/whatch.jpg",
      qty: 2,
      price: 1500,
    },
    {
      sno: "NM85NM",
      name: "Smart Watch",
      image: "/assets/img/whatch2.jpg",
      qty: 5,
      price: 1230,
    }
  ];




  ngOnInit(): void {
  }

  public incrementQty(prodctId:string):void{
    this.products = this.products.map((product) => {
      if (product.sno === prodctId){
        return {
          ...product,
          qty : product.qty + 1
        }
      }
      return product;
    });
  }
  public decrementQty(productId:string):void{
    this.products = this.products.map((product) => {
      if (product.sno === productId){
        return {
          ...product,
          qty: (product.qty - 1 > 1) ? product.qty - 1 : 1
        }
      }
      return product;
    });
  }

  public calcGrandTotal():number{
    let total:number = 0;
    for (let product of this.products){
      total += (product.price * product.qty);
    }
    return total;
  }


}
