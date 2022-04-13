import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosManagementComponent } from './heros-management.component';

describe('HerosManagementComponent', () => {
  let component: HerosManagementComponent;
  let fixture: ComponentFixture<HerosManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
