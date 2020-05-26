import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppoimentCheck } from './appocheckInterface';

@Injectable({
  providedIn: 'root'
})

export class AppcheckService {

	constructor(private http:HttpClient) { }

	GetAppointNumber(contactNumber:string):Observable<AppoimentCheck>{
		//console.log(contactNumber);
	  return this.http.get<AppoimentCheck>("http://localhost:3000/patientHistoryList?patientContact="+contactNumber)
	}
	
	GetAppointmentById(appointmentId: number) :Observable<AppoimentCheck>{
		//console.log(appointmentId);
	  return this.http.get<AppoimentCheck>("http://localhost:3000/patientHistoryList/"+appointmentId);
	}

	PostAppointment(model:AppoimentCheck) :Observable<AppoimentCheck>{
	  return this.http.post<AppoimentCheck>("http://localhost:3000/patientHistoryList/",model);
	}

}
