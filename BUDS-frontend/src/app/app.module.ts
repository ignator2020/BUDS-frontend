import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AuthService } from './auth.service';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { OtherdetailsComponent } from './otherdetails/otherdetails.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { InstituteHomeComponent } from './institute-home/institute-home.component';
import { StatisticshomeComponent } from './statisticshome/statisticshome.component';
import { ImagecontainerComponent } from './imagecontainer/imagecontainer.component';
import { CookComponent } from './cook/cook.component';
import { DriverComponent } from './driver/driver.component';
import { HeaderComponent } from './header/header.component';
import { HelperComponent } from './helper/helper.component';
import { OthersComponent } from './others/others.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { StudentsComponent } from './students/students.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TherapistComponent } from './therapist/therapist.component';

@NgModule({
  declarations: [
    AppComponent,
    InstituteRegisterComponent,
    ThankyouComponent,
    StudentaddComponent,
    OtherdetailsComponent,
    AddstaffComponent,
    InstituteHomeComponent,
    StatisticshomeComponent,
    ImagecontainerComponent,
    CookComponent,
    DriverComponent,
    HeaderComponent,
    HelperComponent,
    OthersComponent,
    StaffdetailsComponent,
    StudentsComponent,
    TeacherComponent,
    TherapistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
