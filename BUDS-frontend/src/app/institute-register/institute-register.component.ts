import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  Register(regForm){
    console.log(regForm);
  }
}
