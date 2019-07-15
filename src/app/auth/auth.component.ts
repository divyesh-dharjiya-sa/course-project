import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, throwError, Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit() {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
  
    if(!form.valid){
      return;
    }

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    
    if(this.isLoginMode){  
      authObs = this.authService.login(email,password);
    }else{
      authObs = this.authService.signup(email,password);
    }

    authObs.subscribe((res) => {
      this.isLoading = false;
          console.log(res);
          this.router.navigate(['/recipes']);
    } , err => {
          this.error = err;
          this.isLoading = false;
          console.log(err);
    });

    form.reset();
  }
}
