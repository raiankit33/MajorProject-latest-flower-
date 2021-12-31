import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidateService }  from './service/validate.service';
import { AuthService }  from './service/auth.service';
import {SharedData} from './service/sharedData.service';
import {  ReactiveFormsModule } from '@angular/forms';

import {DriverService} from '../../src/app/service/driver.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule } from '@angular/material/core';

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
import { AddsettingComponent } from './addsetting/addsetting.component';
import { AdditemComponent } from './additem/additem.component';
import { UpdatesettingComponent } from './updatesetting/updatesetting.component';
import { from } from 'rxjs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { EditsaleComponent } from './editsale/editsale.component';
import { EditreceiveComponent } from './editreceive/editreceive.component';
import { AddorderComponent } from './addorder/addorder.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FilterPipe } from '../app/pipes/filter.pipe';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FlowerproductComponent } from './flowerproduct/flowerproduct.component';
import {NgxPaginationModule} from 'ngx-pagination';

import {NgxImageCompressService} from 'ngx-image-compress';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TokenIntercepterService} from '../app/token-intercepter.service'

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
    AddsettingComponent,
    AdditemComponent,
    UpdatesettingComponent,
  
  
    EditsaleComponent,
  
  
    EditreceiveComponent,
  
  
    AddorderComponent,
  
  
    PagenotfoundComponent,
  
  FilterPipe,
  
  AddproductComponent,
  
  FlowerproductComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    CarouselModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut :1000,
      progressBar : true
    }),  // ToastrModule added
    
   
    
  ],
  providers: [ValidateService, AuthService,DriverService,SharedData,NgxImageCompressService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenIntercepterService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
