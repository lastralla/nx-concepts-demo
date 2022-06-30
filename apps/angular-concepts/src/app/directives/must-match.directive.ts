import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { MustMatch } from './must-match.validator';

// https://jasonwatmore.com/post/2020/07/07/angular-10-reactive-forms-validation-example

@Directive({
  selector: '[conceptsMustMatch]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MustMatchDirective,
    multi: true
  }]
})
export class MustMatchDirective implements Validator {
  @Input() conceptsMustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
    const validationErrors = MustMatch(this.conceptsMustMatch[0], this.conceptsMustMatch[1])(formGroup);
    const matchingControl = formGroup.controls[this.conceptsMustMatch[1]];

    if (!matchingControl) {
      return null;
    }

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return matchingControl.errors;
    }

    formGroup.controls[this.conceptsMustMatch[1]].setErrors(validationErrors);

    // Note: return value never used since the directive has a side effect
    // it applies the error to the second form control

    return validationErrors;
  }
}
