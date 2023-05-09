import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstAssigment';
  showPassword = false;
  log = [];

  onToggleDisplay() {
    this.showPassword = !this.showPassword;
    this.log.push(new Date());
  }
}
