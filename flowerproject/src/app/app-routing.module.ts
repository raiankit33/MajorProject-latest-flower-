import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AloginComponent } from './alogin/alogin.component';
import { CartComponent } from './cart/cart.component';
import { CloginComponent } from './clogin/clogin.component';
import { CregisterComponent } from './cregister/cregister.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { OrderComponent } from './order/order.component';
import { ReceiveditemComponent } from './receiveditem/receiveditem.component';
import { SalesComponent } from './sales/sales.component';
import { SettingComponent } from './setting/setting.component';
import { AddsettingComponent } from './addsetting/addsetting.component';
import { AdditemComponent } from './additem/additem.component';
import { UpdatesettingComponent } from './updatesetting/updatesetting.component';


import { EditsaleComponent } from './editsale/editsale.component';
import { EditreceiveComponent } from './editreceive/editreceive.component';
import { AddorderComponent } from './addorder/addorder.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'login',component:CloginComponent},
  {path:'main',component:MainpageComponent},
  {path:'register',component:CregisterComponent},
  {path:'about',component:AboutComponent},
  {path:'footer',component:FooterComponent},
  {path:'cart',component:CartComponent},
  {path:'alogin',component:AloginComponent},
  {path:'admin',component:AdminComponent},
  {path:'dash',component:DashboadComponent},
  {path:'itemlist',component:ItemlistComponent},
  {path:'receive',component:ReceiveditemComponent},
  {path:'sale',component:SalesComponent},
  {path:'setting',component:SettingComponent},
  {path:'details',component:DetailproductComponent},
  {path:'order',component:OrderComponent},
  {path:'addsetting',component:AddsettingComponent},
  {path:'additem',component:AdditemComponent},
  {path:'upsetting',component:UpdatesettingComponent},
  {path:'editreceive',component:EditreceiveComponent},
  {path:'addorder',component:AddorderComponent},
  

  {path:'editsale',component:EditsaleComponent}
 
  
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
