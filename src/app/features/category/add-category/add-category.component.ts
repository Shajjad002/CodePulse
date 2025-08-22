import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request-model';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent  implements OnDestroy{

  model:AddCategoryRequest;

  private addCategorySubscription?: Subscription;

  constructor(private categoryService: CategoryService) {
    this.model = { 
      name: '',
      urlHandle: ''
     };
  }
 

  onSubmit() {
    // Logic to handle form submission for adding a category

      this.addCategorySubscription=this.categoryService.addCategory(this.model).subscribe({
      next: () => {
        console.log('Category added successfully');
        // Optionally, navigate to the category list or reset the form
      },
      error: (err) => {
        console.error('Error adding category:', err);
        // Handle error appropriately
      }
    });
    
    //console.log(this.model);
  }

   ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }


}
