import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent implements OnInit {

  students={
    name:'',
    dob:'',
    gender:'',
    parent:'',
    aadhar:'',
    ration:'',
    disability:'',
    percent:'',
    phone:''
  };

  otherDisability:'';

  
  public disabilities = ['Autism','Mental Retardation','Multiple Disability','Cerebral Palsy','Others'];

  status = 'none';
  errorMsg = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addStudent(){
    alert("Student added successfully");
    this.router.navigate(['/thankyou']);
    if(this.students.disability == 'others'){
      this.students.disability = this.otherDisability;
    }
  }

}
