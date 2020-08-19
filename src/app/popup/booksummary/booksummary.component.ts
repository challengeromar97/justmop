import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booksummary',
  templateUrl: './booksummary.component.html',
  styleUrls: ['./booksummary.component.scss'],
})
export class BooksummaryComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit(true);
  }
}
