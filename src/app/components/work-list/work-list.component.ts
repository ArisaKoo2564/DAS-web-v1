import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css'],
})
export class WorkListComponent {
  constructor(private router: Router) {}

  goToCreate() {
    this.router.navigate(['/create-work']);
  }
}
