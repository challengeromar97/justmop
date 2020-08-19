import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'justmop';
  login = false;

  onLogin() {
    this.login = !this.login;
  }
}
