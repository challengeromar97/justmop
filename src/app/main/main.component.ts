import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() onLogin: boolean;
  showViewAll: boolean = false;
  login: boolean = false;
  pickupDate: boolean = false;
  dropOffDate: boolean = false;
  bookSummary: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.onLogin.previousValue != changes.onLogin.currentValue)
      this.login = true;
  }

  ngOnInit(): void {
  }

}
