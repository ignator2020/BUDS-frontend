import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {
  user = {
    role:'',
    email: '',
    password: ''
  };

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


login()
{
  alert("you have successfully logged in");
}}
