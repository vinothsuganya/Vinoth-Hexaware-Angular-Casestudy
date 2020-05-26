import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AppcheckService } from './appocheck.service';

@Component({
  selector: 'app-appocheck',
  templateUrl: './appocheck.component.html',
  styleUrls: ['./appocheck.component.css']
})
export class AppocheckComponent implements OnInit {
	
	appoinmentResponse: any;

	constructor(private appointServ:AppcheckService, private router: Router) { }

	ngOnInit(): void {	}

	appotCheckForm = new FormGroup({
		appointContact: new FormControl(null, Validators.required)
	});

	submit() {
		const appointContact = this.appotCheckForm.get("appointContact").value;
		this.appointServ.GetAppointNumber(appointContact).subscribe(data => {
			this.appoinmentResponse = data;
			if(this.appoinmentResponse.length >= 1){
				this.router.navigate(
					["patientHistory/", appointContact]
				);
			}else{
				this.router.navigate(["Error"]);
			}
			//console.log(this.appoinmentResponse.length);
			//console.log(data);
		},(err:HttpErrorResponse)=>{
			//console.log("Error in Request :"+err.message)
			this.router.navigate(["Error"]);
		});
		
	}

}

