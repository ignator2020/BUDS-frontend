import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otherdetails',
  templateUrl: './otherdetails.component.html',
  styleUrls: ['./otherdetails.component.css']
})
export class OtherdetailsComponent implements OnInit {

  otherDetails = {
    area:'',
    total:'',
    orbg:'',
    cls:'',
    tlts:'',
    dftlts:'',
    smart:'',
    vehicle:'',
    ownRented:'',
    vehNum:''
  };

  
  

  status = 'none';
  errorMsg = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addDetails(){
    alert("Details added successfully");
    this.router.navigate(['/thankyou']);
    
  }

}
