import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { product } from '../user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  trendyProducts:undefined | product[];
  constructor(private product:ProductService) { }
  

  ngOnInit(): void {
    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }
  
   
  onClick(id : string){
    
  }
  
}

