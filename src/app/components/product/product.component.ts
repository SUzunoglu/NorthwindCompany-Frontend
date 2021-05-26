import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product1 = {
    productId: 1,
    productName: 'Kalem',
    categoryId: 1,
    unitPrice: 5,
  };
  product2 = {
    productId: 2,
    productName: 'Kolonya',
    categoryId: 2,
    unitPrice: 15,
  };
  product3 = {
    productId: 3,
    productName: 'Limon',
    categoryId: 3,
    unitPrice: 25,
  };
  product4 = {
    productId: 4,
    productName: 'Mouse',
    categoryId: 4,
    unitPrice: 35,
  };
  product5 = {
    productId: 5,
    productName: 'Kaktüs',
    categoryId: 5,
    unitPrice: 45,
  };
  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];

  constructor() {}

  ngOnInit(): void {}
}
