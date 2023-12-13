import { Component } from '@angular/core';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css'],
})
export class RejectComponent {
  currentPage = 1;
  pageSize = 10; // Number of items per page

  loading: boolean = false;

  // Simulated data for the example
  data = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
    email: `email${i + 1}@example.com`,
  }));

  constructor() {}

  ngOnInit(): void {}
}
