import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() login = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    this.login.emit(true);
  }
}
