import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-theme-switch',
  templateUrl: './toggle-theme-switch.component.html',
  styleUrls: ['./toggle-theme-switch.component.css'],
})
export class ToggleThemeSwitchComponent implements OnInit {
  isLight: boolean = true;
  constructor() {}
  ngOnInit(): void {}

  toggleSwitch(){
    this.isLight = !this.isLight;
  }
}
