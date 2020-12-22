import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidateService }  from './service/validate.service';
import { AuthService }  from './service/auth.service';
import {SharedData} from './service/sharedData.service';
import {DriverService} from '../../src/app/service/driver.service';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CloginComponent } from './clogin/clogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CregisterComponent } from './cregister/cregister.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AloginComponent } from './alogin/alogin.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ReceiveditemComponent } from './receiveditem/receiveditem.component';
import { SalesComponent } from './sales/sales.component';
import { SettingComponent } from './setting/setting.component';
import { OrderComponent } from './order/order.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CloginComponent,
    MainpageComponent,
    NavbarComponent,
    AboutComponent,
    CregisterComponent,
    FooterComponent,
    CartComponent,
    AdminComponent,
    AloginComponent,
    Navbar2Component,
    DashboadComponent,
    ItemlistComponent,
    ReceiveditemComponent,
    SalesComponent,
    SettingComponent,
    OrderComponent,
    DetailproductComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, 
    FlashMessagesModule.forRoot(),
   
    
  ],
  providers: [ValidateService, AuthService,DriverService,SharedData],
  bootstrap: [AppComponent]
})
export class AppModule { }
