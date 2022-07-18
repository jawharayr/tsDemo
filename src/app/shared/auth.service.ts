import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireauth: AngularFireAuth, private router: Router) { 
  }
  login(username:string, password:string){
    this.fireauth.signInWithEmailAndPassword(username,password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['home'])

    }, err => {
      alert('Something went wrong');
      this.router.navigate(['login']);

    })
  }
  logout(){
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);

    }, err => {
      alert('something went wrong')

    })
  }
}
