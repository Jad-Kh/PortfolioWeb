import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
    })
  }

  get getControl(){
    return this.loginForm.controls;
  }

  login(): void {
    this.authService
      .login(this.loginForm?.value.username, this.loginForm?.value.password)
      .subscribe();
    this.router.navigate(["/"]);
  }

  navigate(): void {
     this.router.navigateByUrl('/register');
  }
}
