import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { DataProductService } from 'src/app/services/data-product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  products: Array<IProduct> = []

  constructor(private dataProductService: DataProductService) { }


  ngOnInit(): void {
    this.dataProductService.products$.
    subscribe(
      (products: IProduct[]) => {
        this.products = products
      }
    )
  }

}
