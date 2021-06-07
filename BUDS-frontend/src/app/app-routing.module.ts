import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';

const routes: Routes = [
  {path:'',component:InstituteRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
