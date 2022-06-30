import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group(
      // Add fields
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dob: ['', [
          Validators.required,
          Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
        ]],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(6)
        ]],
        confirmPassword: ['', Validators.required],
        reason: [''],
        acceptTerms: [false, Validators.required]
      },

      // Define custom validations
      // {
      //   validator: MustMatch('password', 'confirmPassword')
      // }
    );
  }

  // convenience getter for the template
  get f() {
    return this.reactiveForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.reactiveForm.invalid) {
      return;
    }

    console.log('Submitted', this.reactiveForm.value);
  }

  onReset() {
    this.submitted == false;
    this.reactiveForm.reset();
  }
}
