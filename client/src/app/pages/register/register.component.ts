import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required, 
        Validators.minLength(5),
        Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[ !@#$%^&*])[a-zA-Z0-9 !@#$%^&*]{5,20}$"),
      ]),
      confirm: new FormControl("", [Validators.required]),
    },
    {
      validators: [ValidatorService.match('password', 'confirm')]
    });
  }

  get getControl() {
    return this.registerForm.controls;
  }

  register(): void {
    this.authService.register(this.registerForm?.value).subscribe(() => {
      this.router.navigate(["register"]);
    });
  }

}
