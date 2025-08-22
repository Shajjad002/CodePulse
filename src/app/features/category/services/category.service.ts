import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest):Observable<void>{
    // Logic to send the model to the backend API for adding a category
    return this.http.post<void>('https://192.168.11.26:45456/api/categories', model);
    //console.log('Category added:', model);
  } 

}
