import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css'],
})
export class WorkListComponent {
  // today: Date = new Date();
  // totalItems = 15; // จำนวนรายการทั้งหมด data.length;
  // itemsPerPage = 10; // จำนวนรายการต่อหน้า
  // maxSize = 5; // จำนวนหน้าที่แสดงใน Paginator
  currentPage = 1; // หน้าปัจจุบัน
  loading: boolean = false;

  // Simulated data for the example
  data = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
    email: `email${i + 1}@example.com`,
  }));

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      // Define your form controls and their initial values and validators
      docId: ['', Validators.required],
      creator: ['', Validators.required],
      createDate: ['', Validators.required],
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

  goToCreate() {
    // this.router.navigate(['/create-work']);
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    // ทำสิ่งที่คุณต้องการเมื่อหน้าที่ถูกเปลี่ยน
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
