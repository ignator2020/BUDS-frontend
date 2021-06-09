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

@NgModule({
  declarations: [
    AppComponent,
    InstituteRegisterComponent,
    ThankyouComponent,
    StudentaddComponent
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
