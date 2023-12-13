import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      // Define your form controls and their initial values and validators
      docId: ['', Validators.required],
      creator: ['', Validators.required],
      createDate: ['', Validators.required,],
      recipient: ['', Validators.required],
      content: ['', Validators.required],
      fileField: ['', Validators.required],
      reason: ['', Validators.required],
      // Add more form controls as needed
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.myForm.valid) {
      // Process the form data
      console.log(this.myForm.value);
    } else {
      // Handle validation errors
      console.log('Form is invalid');
    }
  }
}