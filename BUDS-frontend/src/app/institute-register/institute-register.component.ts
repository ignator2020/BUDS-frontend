import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {

  institute={
    iname:'',
    lsgi:'',
    district:'',
    phone:'',
    email:'',
    buds:''
  };

  status = 'none';
  errorMsg = '';
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // public districts = ['Kasargod','Kannur','Wayanad','Kozhikode','Malappuram','Palakkad','Thrissur','Ernakulam',
  //                     'Idukki','Kottayam','Pathanamthitta','Alappuzha','Kollam','Thiruvananthapuram'];

  Register(regForm){
    alert("You have registered successfully");
    
    this.router.navigate(['/thankyou']);
  }
}
