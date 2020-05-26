import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { viewDocsInterface } from './viewdocsInterface';

@Injectable({
  providedIn: 'root'
})

export class ViewDocsService {
  
  constructor(private httpViewDocSer:HttpClient) { }
  
  viewdocsHttpServiceFun():Observable<viewDocsInterface>{
	  return this.httpViewDocSer.get<viewDocsInterface>("http://localhost:3000/doctorsList");
  }
  
}
