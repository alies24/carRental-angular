import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  currentBrand:Brand;
  brands: Brand[] = [];
  constructor(private brandService: BrandService){
   }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => this.brands = response.data);
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }
  getCurrentBrand(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item list-group-item-action active"
    }
    else{
      return "list-group-item"
    }
  }
  getAllBrandClass(){
    if(this.currentBrand==null){
      return "list-group-item list-group-item-action active"
    }
    else{
      return "list-group-item"
    }
  }


}
