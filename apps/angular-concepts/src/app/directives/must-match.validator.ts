import { ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator to check that value of two controls match
export function MustMatch(controlName: string, matchingControlName: string): ValidatorFn {

  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (formGroup: any): ValidationErrors | null => { // TODO type formGroup to FormGroup
    const noErrorReturn = null;
    const mainControl = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // return null if controls haven't initialised yet
    if (!mainControl || !matchingControl) {
      return noErrorReturn;
    }

    // set error on matchingControl if validation fails
    if (mainControl.value !== matchingControl.value) {
      return {
        mustMatch: true
      };
    }

    return noErrorReturn;
  };
}
