import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClaimMainComponent } from './components/claims/claim-main/claim-main.component';
import { InsuredComponent } from './components/claims/insured/insured.component';
import { InsuredActionsComponent } from './components/claims/insured-actions/insured-actions.component';
import { ContactsComponent } from './components/claims/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClaimMainComponent,
    InsuredComponent,
    InsuredActionsComponent,
    ContactsComponent,
    HomeComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [PhonePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
