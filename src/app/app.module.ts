import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { IncludedComponent } from './popup/included/included.component';
import { LoginComponent } from './popup/login/login.component';
import { PickupDateComponent } from './popup/pickup-date/pickup-date.component';
import { DropoffDateComponent } from './popup/dropoff-date/dropoff-date.component';
import { BooksummaryComponent } from './popup/booksummary/booksummary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    IncludedComponent,
    LoginComponent,
    PickupDateComponent,
    DropoffDateComponent,
    BooksummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
