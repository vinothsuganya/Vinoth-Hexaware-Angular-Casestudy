import { Component, OnInit } from '@angular/core';
import { viewDocsInterface } from './viewdocsInterface';
import { ViewDocsService } from './viewdocs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-viewdocs',
	templateUrl: './viewdocs.component.html',
	styleUrls: ['./viewdocs.component.css']
})
export class ViewdocsComponent implements OnInit {
	
	docListsev: viewDocsInterface;

	constructor(private docSerInstance:ViewDocsService, private router: Router) { }

	ngOnInit() {
		this.docSerInstance.viewdocsHttpServiceFun()
		.subscribe(value=>{ 
			this.docListsev=value 
		},
		(err:HttpErrorResponse)=>{ 
			console.log("Error in Request :" + err.message)
			this.router.navigate(["Error"]); 
		});
	}
	
}


