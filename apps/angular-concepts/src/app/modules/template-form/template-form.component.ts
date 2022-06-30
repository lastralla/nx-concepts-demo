import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  selectOptions: Array<{ id: string; label: string }> = [
    {
      id: 'opt1',
      label: 'Option 1',
    },
    {
      id: 'opt2',
      label: 'Option 2',
    },
  ];

  genderOptions: Array<{ id: string; label: string }> = [
    {
      id: 'male',
      label: 'Male',
    },
    {
      id: 'female',
      label: 'female',
    },
    {
      id: 'na',
      label: 'Not specified',
    },
  ];

  checkboxOptions: Array<{ id: string; label: string }> = [
    {
      id: 'checkboxOpt1',
      label: 'Option 1',
    },
    {
      id: 'checkboxOpt2',
      label: 'Option 2',
    },
  ];

  model = {
    name: '',
    email: '',
    username: '',
    age: null,
    password: '',
    confirmPassword: '',
    comment: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    gender: '',
  };

  @ViewChild('templateForm')
  templateForm: NgForm;

  onSubmit(form: NgForm): void {
    console.log('Submitted', form);
  }
}
