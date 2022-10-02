import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { INutrients } from 'src/app/interfaces/nutriens.interface';
import { DataProductService } from 'src/app/services/data-product.service';

@Component({
  selector: 'app-nutrients',
  templateUrl: './nutrients.component.html',
  styleUrls: ['./nutrients.component.scss']
})
export class NutrientsComponent implements OnInit, OnDestroy {

  calories: number = 0
  carbohydrates: number = 0
  fat: number = 0
  protein: number = 0
  sub: Subscription = new Subscription

  constructor(private dataProductService: DataProductService) { }

  ngOnInit(): void {
   this.sub = this.dataProductService.nutrients$.
     subscribe(
      (nutrients: INutrients) => {
        this.calories = nutrients.calories
        this.carbohydrates = nutrients.carbohydrates
        this.fat = nutrients.fat
        this.protein = nutrients.protein
        this.dataProductService.getProduct()
      }
     )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
