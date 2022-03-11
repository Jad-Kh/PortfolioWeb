import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
    providedIn: "root",
})
export class ValidatorService {
    static match(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
          const control = controls.get(controlName);
          const checkControl = controls.get(checkControlName);
          console.log(control?.value)
          console.log(checkControl?.value)
          if (checkControl?.errors && !checkControl.errors.matching) {
            return null;
          }

          if (control?.value !== checkControl?.value) {
            controls.get(checkControlName)?.setErrors({ matching: true });
            return { matching: true };
          } else {
            return null;
          }
        };
    }
}