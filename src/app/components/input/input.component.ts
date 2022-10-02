import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { DataProductService } from 'src/app/services/data-product.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  form: FormGroup

  constructor(private dataProductService: DataProductService) {
    this.form = new FormGroup({
      input: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(4),
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
    this.dataProductService.getNutrients(this.form.value.input)
  }

  getDailyMealPlan(): void {
    this.dataProductService.getNutrients(this.form.value.input)
  }

  submit(): void {
    console.log(this.form.value.input)
  }

}
