import { Component, OnInit } from '@angular/core';
import { DataProductService } from '../../services/data-product.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private dataProductService: DataProductService) { }

  error: string = ''

  ngOnInit(): void {
    this.dataProductService.error$.
      subscribe(
        (error: string) => {
          this.error = error
        }
      )
  }

  hideError(): void {
    this.error = ''
  }

}
