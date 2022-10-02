import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMealsData } from '../interfaces/meals-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getNutrients(inputText: string): Observable<IMealsData> {
   return this.http.get<IMealsData>(`https://api.spoonacular.com/mealplanner/generate?apiKey=6c8a7aebb9ff48ceb52365a295dd57f5&timeFrame=day&targetCalories=${inputText ? inputText : 2000}`)
  }

  getProducts(id: number): Observable<any>  {
    return this.http.get<any>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6c8a7aebb9ff48ceb52365a295dd57f5&includeNutrition=false`)
  }

}
