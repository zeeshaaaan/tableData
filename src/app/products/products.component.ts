import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any;
  key:string='name';
  reverse:boolean=false;

  constructor(private apicallService:ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getProduct().subscribe((result:any)=>{
      this.products=result.cookies;
      console.log(this.products);
    })
  }

  sort(key:string){
    this.key=key;
    this.reverse=!this.reverse;
  }

}
