import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  basicForm: UntypedFormGroup;
  constructor(
    /**
     * - in order to use FormBuilder, need to import the ReactiveFormsModule & FormsModule
     */
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // create and init the form
    this.initForm();
  }

  initForm() {
    this.basicForm = this.fb.group({
      name: [''],
      age: 0,
      weight: 0,
      height: 0,
    });
  }

  submit() {
    this.toastr.success('Successfully submitted data', 'Success');
  }
}
