import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropoff-date',
  templateUrl: './dropoff-date.component.html',
  styleUrls: ['./dropoff-date.component.scss'],
})
export class DropoffDateComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();

  today: Number = null;

  dates: { num: number; text: string }[] = [
    { num: 17, text: 'MON' },
    { num: 18, text: 'TUE' },
    { num: 19, text: 'WED' },
    { num: 20, text: 'THU' },
    { num: 21, text: 'FRI' },
    { num: 22, text: 'SAT' },
    { num: 23, text: 'SUN' },
    { num: 24, text: 'MON' },
    { num: 25, text: 'TUE' },
    { num: 26, text: 'WED' },
    { num: 27, text: 'THU' },
    { num: 28, text: 'FRI' },
    { num: 29, text: 'SAT' },
    { num: 30, text: 'SUN' },
  ];

  selectedDate = 21;

  time: string[] = [
    '4 AM - 5 PM',
    '5 PM - 6 PM',
    '6 PM - 7 PM',
    '7 PM - 8 PM',
    '8 PM - 9 PM',
    '1 AM - 2 AM',
    '2 AM - 3 AM',
    '3 AM - 4 AM',
    '4 AM - 5 AM',
  ];

  selectedTime = this.time[0];

  constructor() {}

  ngOnInit(): void {}

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 4,
    infinite: false,
    focusOnSelect: false,
  };

  slideConfig2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: false,
  };

  closePickUp() {
    this.close.emit(true);
  }
}
