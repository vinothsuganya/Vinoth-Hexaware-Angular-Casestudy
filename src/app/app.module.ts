import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ViewdocsComponent } from './viewdocs/viewdocs.component';
import { ViewspecComponent } from './viewspec/viewspec.component';
import { AppocheckComponent } from './appocheck/appocheck.component';
import { PatienthistoryComponent } from './patienthistory/patienthistory.component';
import { BookapointmentComponent } from './bookapointment/bookapointment.component';
import { ErrorComponent } from './error/error.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const route:Routes=[
	{ path:"", redirectTo:"home", pathMatch:"full" },
	{ path:"home", component:HomeComponent },
	{ path:"viewdocs", component:ViewdocsComponent },
	{ path:"viewspec", component:ViewspecComponent },
	{ path:"appointCheck", component:AppocheckComponent },
	{ path:"patientHistory/:cnumber", component:PatienthistoryComponent },
	{ path:"bookapt", component:BookapointmentComponent },
	{ path:"Error", component: ErrorComponent },
	{ path:"**", component:PagenotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewdocsComponent,
    ViewspecComponent,
    AppocheckComponent,
    PatienthistoryComponent,
    BookapointmentComponent,
    PagenotfoundComponent,
	ErrorComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
    RouterModule.forRoot(route),
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
