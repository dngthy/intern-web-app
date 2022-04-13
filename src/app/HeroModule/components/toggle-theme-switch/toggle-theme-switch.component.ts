import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-theme-switch',
  templateUrl: './toggle-theme-switch.component.html',
  styleUrls: ['../../../../styles.css','./toggle-theme-switch.component.css'],
})
export class ToggleThemeSwitchComponent implements OnInit {
  isLight: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.isLight = window.localStorage.getItem('theme-mode')==='true';
    this.setLocalStorage()
    this.setTheme()
  }

  setLocalStorage() {
    window.localStorage.setItem('theme-mode',this.isLight.toString());
  }

  setTheme(){
    let a = document.querySelector('body');
    a?.setAttribute('class', this.isLight?'light-theme':'dark-theme')
  }

  toggleSwitch(){
    this.isLight = !this.isLight;
    this.setLocalStorage()
    this.setTheme()
  }
}
