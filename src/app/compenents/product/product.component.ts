import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public inputScreen(){
    this.router.navigate(['/input']);
  }

  public viewCarousel(){
    this.router.navigate(['/product-carousel']);
  }

}
