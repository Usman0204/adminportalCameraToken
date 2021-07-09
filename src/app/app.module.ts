import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashmainComponent } from './dashboard/dashmain/dashmain.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LandingComponent } from './dashboard/dashmain/landing/landing.component';
import { HeaderComponent } from './shared/header/header.component';
import { DeliveryComponent } from './dashboard/dashmain/delivery/delivery.component';
import { ProductsComponent } from './dashboard/dashmain/products/products.component';
import { UsersComponent } from './dashboard/dashmain/users/users.component';
import { RidersComponent } from './dashboard/dashmain/riders/riders.component';
import { SettingComponent } from './dashboard/dashmain/setting/setting.component';
import { ChartsModule } from 'ng2-charts';
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { AddProductsComponent } from './dashboard/dashmain/products/add-products/add-products.component';
import { EditProductsComponent } from './dashboard/dashmain/products/edit-products/edit-products.component';
import { DeliveryDetailsComponent } from './dashboard/dashmain/delivery/delivery-details/delivery-details.component';
import { CategoryComponent } from './dashboard/dashmain/category/category.component';
import { ApiWrapperService } from './services/api.services';

import { AddcategoryComponent } from './dashboard/dashmain/category/addcategory/addcategory.component';
import { SubcategoryComponent } from './dashboard/dashmain/subcategory/subcategory.component';
import { AddsubcategoryComponent } from './dashboard/dashmain/subcategory/addsubcategory/addsubcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashmainComponent,
    SidebarComponent,
    LandingComponent,
    HeaderComponent,
    DeliveryComponent,
    ProductsComponent,
    UsersComponent,
    RidersComponent,
    SettingComponent,
    AddProductsComponent,
    EditProductsComponent,
    DeliveryDetailsComponent,
    CategoryComponent,
    AddcategoryComponent,
    SubcategoryComponent,
    AddsubcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FusionChartsModule,
    FormsModule, ReactiveFormsModule,HttpClientModule,NgxPaginationModule
  ],
  providers: [ApiWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
