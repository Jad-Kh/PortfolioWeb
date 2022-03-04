import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth-service";

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
      ]),
      confirm: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  register(): void {
    this.authService.register(this.registerForm?.value).subscribe(() => {
      this.router.navigate(["register"]);
    });
  }

}
