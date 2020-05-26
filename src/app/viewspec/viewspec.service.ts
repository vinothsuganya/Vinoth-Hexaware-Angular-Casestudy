import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { viewSpecInterface } from './viewspecInterface';

@Injectable({
  providedIn: 'root'
})

export class ViewSpecService {
  
  constructor(private httpViewSpecSer:HttpClient) { }
  
  viewspecHttpServiceFun():Observable<viewSpecInterface>{
	  return this.httpViewSpecSer.get<viewSpecInterface>("http://localhost:3000/specializationList");
  }
  
}