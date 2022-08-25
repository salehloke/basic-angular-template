import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  basicForm: UntypedFormGroup;

  // WHEN injecting formBuilder, makesure to import form & ReactiveForm
  /**
   * Error: Uncaught (in promise): NullInjectorError: R3InjectorError(AppModule)[FormBuilder -> FormBuilder -> FormBuilder]:
   * - this error is because not importing the ReactiveFormsModule & FormsModule
   */
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.basicForm = this.fb.group({
      name: [''],
      age: 0,
    });
  }
}
