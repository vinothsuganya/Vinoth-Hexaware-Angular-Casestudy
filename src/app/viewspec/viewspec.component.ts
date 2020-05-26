import { Component, OnInit } from '@angular/core';
import { viewSpecInterface } from './viewspecInterface';
import { ViewSpecService } from './viewspec.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-viewspec',
	templateUrl: './viewspec.component.html',
	styleUrls: ['./viewspec.component.css']
})
export class ViewspecComponent implements OnInit {
	
	specialistSev: viewSpecInterface;
	
	constructor(private specSer:ViewSpecService, private router:Router) {}

	ngOnInit() {
		this.specSer.viewspecHttpServiceFun()
		.subscribe(value=>{ 
			this.specialistSev=value 
		},
		(err:HttpErrorResponse)=>{ 
			console.log("Error in Request :" + err.message)
			this.router.navigate(["Error"]); 
		});
	}

}