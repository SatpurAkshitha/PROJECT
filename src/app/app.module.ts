import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AccountserviceService} from './account/accountservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { EventsModule } from './events/events.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import {AccountModule} from './account/account.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EventsModule,
    StaticpagesModule,
    AccountModule,
    AppRoutingModule,

  ],
  providers: [AccountserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
