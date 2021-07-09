import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashmainComponent } from './dashboard/dashmain/dashmain.component';
import { LandingComponent } from './dashboard/dashmain/landing/landing.component';
import { DeliveryComponent } from './dashboard/dashmain/delivery/delivery.component';
import { ProductsComponent } from './dashboard/dashmain/products/products.component';
import { UsersComponent } from './dashboard/dashmain/users/users.component';
import { RidersComponent } from './dashboard/dashmain/riders/riders.component';
import { SettingComponent } from './dashboard/dashmain/setting/setting.component';
import { AddProductsComponent } from './dashboard/dashmain/products/add-products/add-products.component';
import { DeliveryDetailsComponent } from './dashboard/dashmain/delivery/delivery-details/delivery-details.component';
import { CategoryComponent } from './dashboard/dashmain/category/category.component';
import { AddcategoryComponent } from './dashboard/dashmain/category/addcategory/addcategory.component';
import { SubcategoryComponent } from './dashboard/dashmain/subcategory/subcategory.component';
import { AddsubcategoryComponent } from './dashboard/dashmain/subcategory/addsubcategory/addsubcategory.component';
import { EditProductsComponent } from './dashboard/dashmain/products/edit-products/edit-products.component';


const routes: Routes = [
  {
    path:"", component:LoginComponent
  },
  {
    path:"dashboard", component:DashmainComponent, children:[
      {
        path:"main", component:ProductsComponent
      },
      {
        path:"delivery", component:DeliveryComponent
      },
      {
        path:"delivery-details", component:DeliveryDetailsComponent
      },
      {
        path:"products", component:ProductsComponent
      },
      {
        path:"categories", component:CategoryComponent
      },
      {
        path:"addCategory", component: AddcategoryComponent
      },
      {
        path:"subcategory", component: SubcategoryComponent
      },
      {
        path:"addsubcategory", component: AddsubcategoryComponent
      },
      {
        path:"addproducts", component: AddProductsComponent
      },
      {
        path:"editproducts/:id", component: EditProductsComponent
      },
      {
        path:"users", component:UsersComponent
      },
      {
        path:"riders", component:RidersComponent
      },
      {
        path:"settings", component:SettingComponent
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
