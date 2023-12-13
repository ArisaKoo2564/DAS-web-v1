import { Component } from '@angular/core';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css'],
})
export class InprogressComponent {
  currentPage = 1;
  pageSize = 10;

  loading: boolean = false;

  data = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
    email: `email${i + 1}@example.com`,
  }));

  constructor() {}

  ngOnInit(): void {}

  onEdit() {
    // this.router.navigate(['/edit-work']);
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
  }
}
