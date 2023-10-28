import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkComponent } from './create-work.component';

describe('CreateWorkComponent', () => {
  let component: CreateWorkComponent;
  let fixture: ComponentFixture<CreateWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWorkComponent]
    });
    fixture = TestBed.createComponent(CreateWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
