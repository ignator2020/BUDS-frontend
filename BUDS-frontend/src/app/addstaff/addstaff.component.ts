import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  staff = {
    type:'',
    name:'',
    iname:'',
    designation:'',
    interval:'',
    dob:'',
    phone:'',
    rci:'',
    qualification:'',
    salary:''  
  }
  
 
  

  public staffs = ['Teacher','Helper','Cook','Driver','Therapist'];

  status = 'none';
  errorMsg = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addStaff(){
    alert("Staff added successfully");
    this.router.navigate(['/thankyou']);
  }

}
