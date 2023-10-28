import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() menu: any;
  constructor(private router: Router) {}

  value = [
    {
      name: 'List',
      path: '/work-list',
      count: 1,
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
  ngOnInit(): void {}

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
