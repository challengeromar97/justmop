import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  tel;

  constructor() {}

  ngOnInit(): void {}

  closeLogin() {
    this.close.emit(true);
  }
}
