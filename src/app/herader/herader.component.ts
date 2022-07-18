import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-herader',
  templateUrl: './herader.component.html',
  styleUrls: ['./herader.component.scss']
})
export class HeraderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }
goToHome(){
  this.router.navigate(['home'])
}
logout(){
  this.auth.logout();
  }

}
