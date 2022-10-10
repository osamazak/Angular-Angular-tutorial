import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { CounterComponent } from './components/counter/counter.component';
import { WishMessageComponent } from './components/wish-message/wish-message.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShopingCardComponent } from './components/shoping-card/shoping-card.component';
import { ChangeUsernameComponent } from './components/change-username/change-username.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { AmountRangeComponent } from './components/amount-range/amount-range.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ContactAppComponent } from './components/contact-app/contact-app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NewCardComponent,
    CounterComponent,
    WishMessageComponent,
    ProductItemComponent,
    ShopingCardComponent,
    ChangeUsernameComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    UserRegisterComponent,
    PipesComponent,
    UserListComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
