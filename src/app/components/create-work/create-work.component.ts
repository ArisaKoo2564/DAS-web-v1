import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-work',
  templateUrl: './create-work.component.html',
  styleUrls: ['./create-work.component.css'],
})
export class CreateWorkComponent {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      inputField: ['', Validators.required],
      textareaField: ['', Validators.required],
      selectField: ['', Validators.required],
      fileField: ['', Validators.required],
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.myForm.value);
    if (this.myForm.valid) {
      const formData = new FormData();
      formData.append('inputField', this.myForm.get('inputField')!.value);
      formData.append('textareaField', this.myForm.get('textareaField')!.value);
      formData.append('selectField', this.myForm.get('selectField')!.value);
      formData.append('fileField', this.myForm.get('fileField')!.value);

      console.log(formData);

      // this.http.post('your-backend-api-endpoint', formData).subscribe(
      //     response => {
      //         console.log('Upload success', response);
      //         // Handle success response from the server
      //     },
      //     error => {
      //         console.error('Upload error', error);
      //         // Handle error response from the server
      //     }
      // );
    }
  }
  
}
