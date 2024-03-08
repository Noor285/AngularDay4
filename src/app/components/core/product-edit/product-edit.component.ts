import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  editForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService) {}

  ngOnInit(): void {

    this.editForm = this.fb.group({
      productId: [''],
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required],
      productQuantity: ['', Validators.required],
      productDiscount: [''],
      productImage: ['', Validators.required],
      onSale: [false],
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.editForm.valid) {
      // Assuming you have a service method to update the product details
      this.productService.updateProduct(this.editForm.value);

      // Navigate to the product page after updating
      this.router.navigate(['/products']);
    }
  }
}
