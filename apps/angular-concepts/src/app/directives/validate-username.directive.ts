import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Directive({
  selector: '[conceptsValidateUsername][ngModel]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidateUsernameDirective,
    multi: true
  }],
})
export class ValidateUsernameDirective implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const isTaken = control.value && control.value.trim() === 'Taken'; // fake it

    return of(isTaken ? {
      validateUsername: 'Username exists already'
    }: null);
  }
}
