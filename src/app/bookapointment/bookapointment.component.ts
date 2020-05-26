import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { viewSpecInterface } from './../viewspec/viewspecInterface';
import { ViewSpecService } from './../viewspec/viewspec.service';
import { viewDocsInterface } from './../viewdocs/viewdocsInterface';
import { ViewDocsService } from './../viewdocs/viewdocs.service';
import { AppcheckService } from './../appocheck/appocheck.service';
import { AppoimentCheck } from './../appocheck/appocheckInterface';

@Component({
  selector: 'app-bookapointment',
  templateUrl: './bookapointment.component.html',
  styleUrls: ['./bookapointment.component.css']
})

export class BookapointmentComponent implements OnInit {
	
	specializationList: viewSpecInterface;
	doctorList: viewDocsInterface;
	constructor(private doctorService: ViewDocsService,
	private specializationService: ViewSpecService,
	private appointmentService: AppcheckService,

	private router: Router) { }

	ngOnInit(): void {
		this.specializationService.viewspecHttpServiceFun().subscribe(data => {
			this.specializationList = data
		}, (err: HttpErrorResponse) => {
			console.log("Error in Request :" + err.message)
			this.router.navigate(["Error"]);
		})

		this.doctorService.viewdocsHttpServiceFun().subscribe(data => {
			this.doctorList = data
		}, (err: HttpErrorResponse) => {
			console.log("Error in Request :" + err.message)
			this.router.navigate(["Error"]);
		})
	}
	
	postAppointment: AppoimentCheck;
	responseModel: AppoimentCheck;
	appointmentForm = new FormGroup({
		bookPatientName: new FormControl(null, Validators.required),
		bookPatientContact: new FormControl(null, Validators.required),
		bookDoctor: new FormControl(null, Validators.required),
		bookSpecialization: new FormControl(null, Validators.required),
		bookDate: new FormControl(null, Validators.required)
	});
	
	submit() {
		this.postAppointment = {
			id: 0,
			patientName: this.appointmentForm.get("bookPatientName").value,
			patientContact: this.appointmentForm.get("bookPatientContact").value,
			docName: this.appointmentForm.get("bookDoctor").value,
			docSpecial: this.appointmentForm.get("bookSpecialization").value,
			appoinmnetDate: this.appointmentForm.get("bookDate").value
		}
		this.appointmentService.PostAppointment(this.postAppointment).subscribe(data => {
			this.responseModel = data;
			alert("Appoinment booked successfully...");
			this.router.navigate(["home/"]);
		}, (err: HttpErrorResponse) => { 
			console.log("Error in Request") 
		});
		console.log("Submited");
	}
	
}
