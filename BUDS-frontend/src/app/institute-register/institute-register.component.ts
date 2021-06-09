import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {

  institute={
    name:'',
    district:'',
    lsgi:'',
    phone:'',
    email:'',
    type:''
  };

  public districts = ['Kasargod','Kannur','Wayanad','Kozhikode','Malappuram','Palakkad','Thrissur','Ernakulam',
                      'Idukki','Kottayam','Alappuzha','Pathanamthitta','Kollam','Thiruvananthapuram'];

  status = 'none';
  errorMsg = '';
  

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.status = 'connecting';
      this.auth.register(this.institute)
      .subscribe(
        data =>{
          this.status = 'success';
          this.router.navigate(['/thankyou'])
        },
        error =>{
          this.status = 'error'
          if(error.status === 409){
            this.errorMsg = error.error;
          }
          else if(error.status == 500){
            this.errorMsg = error.error;
          }
          else{
            this.errorMsg = 'Sorry! Something went wrong Please try later.'
            console.log(error);
          }
        }
      )
  }
}
