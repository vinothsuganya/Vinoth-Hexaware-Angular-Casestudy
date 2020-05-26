import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AppcheckService } from './../appocheck/appocheck.service';

@Component({
	selector: 'app-patienthistory',
	templateUrl: './patienthistory.component.html',
	styleUrls: ['./patienthistory.component.css']
})

export class PatienthistoryComponent implements OnInit {
	
	cnumber: string;
	appointments: any;

	constructor(private router: Router, private actRoute:ActivatedRoute, private appointmentService:AppcheckService) { }

	ngOnInit() {
		this.cnumber = this.actRoute.snapshot.params["cnumber"];
		this.GetAppointment();
	}
	
	GetAppointment() {
		this.appointmentService.GetAppointNumber(this.cnumber).subscribe(data => {
			this.appointments = data;
		},(err:HttpErrorResponse)=>{
			this.router.navigate(["Error"]);
		});
	}
	
}

	