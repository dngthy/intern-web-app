import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleThemeSwitchComponent } from './toggle-theme-switch.component';

describe('ToggleThemeSwitchComponent', () => {
  let component: ToggleThemeSwitchComponent;
  let fixture: ComponentFixture<ToggleThemeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleThemeSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
