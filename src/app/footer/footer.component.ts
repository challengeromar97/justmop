import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  links: { title: string; link: string }[] = [
    { title: 'Deep Cleaning', link: 'deep-cleaning' },
    { title: 'Home Cleaning', link: 'home-cleaning' },
    { title: 'Carpet Cleaning', link: 'carpet-cleaning' },
    { title: 'Mattress Cleaning', link: 'mattress-cleaning' },
    { title: 'Sofa Cleaning', link: 'sofa-cleaning' },
    { title: 'Curtain Cleaning', link: 'curtain-cleaning' },
    { title: 'Full Time Maid Services', link: 'full-time-maid-services' },
    { title: 'Dry Cleaning & Laundry', link: 'laundry' },
    { title: 'A/C Cleaning', link: 'ac-cleaning' },
    { title: 'Disinfection Service', link: 'disinfection-service' },
    { title: 'Household Chores', link: 'cousehold-chores' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
