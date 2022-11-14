import { Injectable } from '@angular/core';
import { map, Subject, Subscription } from 'rxjs';
import { INutrients } from '../interfaces/nutriens.interface';
import { IMealsData } from '../interfaces/meals-data.interface';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class DataProductService {

  mealsDataId: Array<number> = []
  products$: Subject<IProduct[]> = new Subject<IProduct[]>()
  error$: Subject<string> = new Subject<string>()
  nutrients$: Subject<INutrients> = new Subject<INutrients>()
  sub: Subscription = new Subscription

  constructor(private productService: ProductService) {

  }

  public getNutrients(inputText: string): void {
    this.sub = this.productService.getNutrients(inputText).
      pipe(
        map(
          (mealPlan: IMealsData) => {
            let nutrients = {
              calories: mealPlan.nutrients.calories,
              carbohydrates: mealPlan.nutrients.carbohydrates,
              fat: mealPlan.nutrients.fat,
              protein: mealPlan.nutrients.protein
            }
            this.getId(mealPlan)
            return nutrients
          }
        )
      ).subscribe(
        (nutrients: INutrients) => {
          this.nutrients$.next(nutrients)
        },
        error => {
          this.error$.next(error.message)
        },
        () => {
          this.sub.unsubscribe()
        }
      )
  }



  private getId(data: IMealsData): void {
    let id = []
    for (let i = 0; i < data.meals.length; i++) {
      id.push(data.meals[i].id)
      this.mealsDataId = id
    }
  }

  public getProduct(): void {
    let prod: IProduct[] = []
    this.mealsDataId.forEach((id) => {
      this.productService.getProducts(id).
        pipe(
          map(
            (product: IProduct) => {
              prod.push({
                title: product.title,
                image: product.image,
                servings: product.servings,
                readyInMinutes: product.readyInMinutes,
                sourceUrl: product.sourceUrl
              })
              if (this.mealsDataId.length === prod.length) {
                this.products$.next(prod)
                prod = []
              }
              return prod
            }
          )
        )
        .subscribe(
          () => { },
          error => {
            this.error$.next(error.message)
          }
        )
    }
    )
  }

}
