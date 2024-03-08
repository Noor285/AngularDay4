import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    img: new FormControl(
      'assets/images/candle/antiq_eg_1704679869626.jpeg'
    ),
    description: new FormControl(''),
    price: new FormControl(''),
    onSale: new FormControl(false),
    discount: new FormControl(0.05),
    quantity: new FormControl(3),
  });

  constructor(
    private prodService: ProductService,
    private myRouter: Router,
    private actRoute: ActivatedRoute
  ) {}
  id: number = 0;
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    if (this.id != 0) {
      // edit
      var product: IProduct = this.prodService.getById(this.id) as IProduct;
      this.myForm.controls['id'].setValue(product.id);
      this.myForm.controls['name'].setValue(product.name);
      this.myForm.controls['price'].setValue(product.price);
      this.myForm.controls['description'].setValue(product.description);
    }
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.myForm.valid) {
      if(this.id){
        //edit
      }else{
        // add
        this.prodService.add(this.myForm.value);
      }
      this.myRouter.navigate(['/products']);
    }
  }
}
