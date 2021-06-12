import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { CookComponent } from './cook/cook.component';
import { DriverComponent } from './driver/driver.component';
import { HelperComponent } from './helper/helper.component';
import { ImagecontainerComponent } from './imagecontainer/imagecontainer.component';
import { InstituteHomeComponent } from './institute-home/institute-home.component';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';
import { OtherdetailsComponent } from './otherdetails/otherdetails.component';
import { OthersComponent } from './others/others.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudentsComponent } from './students/students.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { TherapistComponent } from './therapist/therapist.component';

const routes: Routes = [
  {path:'',component:InstituteHomeComponent,
  children:[{path:'imagecontainer',component:ImagecontainerComponent},
  {path:'staffdetails',component:StaffdetailsComponent,
  children:[{path:'teacher',component:TeacherComponent},
  {path:'driver',component:DriverComponent},
  {path:'cook',component:CookComponent},
  {path:'therapist',component:TherapistComponent},
  {path:'helper',component:HelperComponent}]},
  {path:'students',component:StudentsComponent},
  {path:'others',component:OthersComponent},
]},
  {path:'instituteregister',component:InstituteRegisterComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'addstudent',component:StudentaddComponent},
  {path:'addother',component:OtherdetailsComponent},
  {path:'addstaff',component:AddstaffComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
