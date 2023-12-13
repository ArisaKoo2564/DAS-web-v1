import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() menu: any;

  value = [
    {
      name: 'List',
      path: '/work-list',
      count: 1,
    },
    {
      name: 'Inprogress',
      path: '/inprogress',
      count: 3,
    },
    {
      name: 'Approve',
      path: '/approve',
      count: 13,
    },
    {
      name: 'Reject',
      path: '/reject',
      count: 94,
    },
  ];

  constructor(private router: Router) {}

  isActive: string = '';
  ngOnInit(): void {}

  goTo(path: string): void {
    this.router.navigate([path]);
    this.isActive = path;
  }
}
