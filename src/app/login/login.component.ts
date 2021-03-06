import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username = "";
password= "";
errorMsg ="";

error = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
login(){
  if (this.username.trim().length == 0){
    this.error = true
    this.errorMsg = "يرجى ادخال اسم المستخدم";
  } else if (this.password.trim().length == 0){
    this.error = true
    this.errorMsg = "يرجى ادخال كلمة المرور"
  } else {
    this.errorMsg = ""
  }
}
}
