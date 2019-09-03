import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { product } from '../model/product';
import { ProductService } from '../services/product.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup;
  _product: product;
  productsArray = [];


  constructor(private fb: FormBuilder, private productservices: ProductService) {
    // this.createProdctForm();
    this._product = new product();

  }

  // createProdctForm() {
  //   this.productForm = this.fb.group({
  //     name: ['', Validators.required],
  //     price: ['', Validators.required]

  //   });
  // }
  getProduct() {
    this.productservices.getProductData().subscribe(data => {
      this.productsArray = data;
      console.log(data);
    })
  }
  saveProduct() {
    // const formData = new FormData();
    // formData.append('name', this.productForm.value.name);
    // formData.append('price', this.productForm.value.price);

    this.productservices.saveProductData(this._product).subscribe(data => {
      this.getProduct();
    })
  }
  editProduct(obj) {
    this._product._id = obj._id;
    this._product.productName = obj.productName;
    this._product.productDescription = obj.productDescription;
    this._product.productCode = obj.productCode;
    this._product.productCreated = obj.productCreated;
    this._product.ProductPrice = obj.ProductPrice;
    console.log(obj);
  }

  deleteProduct(_id) {
    this.productservices.deleteProductData(_id).subscribe(data => {
      this.getProduct();
    })
  }
  updateData() {
    this.productservices.updateProductData(this._product).subscribe(data => {
      this.getProduct();
      console.log(data);
    })
  }

  ngOnInit() {
    this.getProduct();
  }

}
