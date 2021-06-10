import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';
import { OtherdetailsComponent } from './otherdetails/otherdetails.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {path:'',component:InstituteRegisterComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'addstudent',component:StudentaddComponent},
  {path:'addother',component:OtherdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
