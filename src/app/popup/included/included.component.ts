import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-included',
  templateUrl: './included.component.html',
  styleUrls: ['./included.component.scss'],
})
export class IncludedComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  size: 'small' | 'big' = 'small';
  prices: number[] = [25, 35, 55];

  constructor() {}

  ngOnInit(): void {}

  changeBagsTo(size: 'small' | 'Big') {
    if (size === 'Big') {
      this.size = 'big';
      this.prices = [45, 65, 95];
    } else {
      this.size = 'small';
      this.prices = [25, 35, 55];
    }
  }

  activatedPricing = 'pressing';
  selectedPricing = 'traditional';

  swapPricingTo(type: string) {
    if (type === this.selectedPricing) {
      this.selectedPricing = '';
    } else {
      this.selectedPricing = type;
    }
  }

  selectedQuestionNumber = 0;

  changeQuestionTo(num: number) {
    if (num === this.selectedQuestionNumber) {
      this.selectedQuestionNumber = 0;
    } else {
      this.selectedQuestionNumber = num;
    }
  }

  closeViewAll() {
    this.close.emit(true);
  }
}
