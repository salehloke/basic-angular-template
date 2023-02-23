import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  mainFormGroup: UntypedFormGroup;
  constructor(
    /**
     * - in order to use FormBuilder, need to import the ReactiveFormsModule & FormsModule
     */
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // create and init the form
    this.initForm();
  }

  initForm() {
    this.mainFormGroup = this.fb.group({
      name: [''],
      age: 0,
    });
  }
}

export interface BasicFormModel {
  name: FormControl<string | null>;
  age: FormControl<number | null>;
}
