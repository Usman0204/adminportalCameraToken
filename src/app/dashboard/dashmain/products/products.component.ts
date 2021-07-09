import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiWrapperService } from 'src/app/services/api.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productlisting: any;
  dtConfig: any = {
    id: 'ordersHistory',
    itemsPerPage: 8,
    currentPage: 1,
    totalItems: 0
  };
  deleteid: any;
  showmodal: boolean;
  constructor(private api:ApiWrapperService) { }

  ngOnInit(): void {
    this.LoadAllproduct();
  }
  LoadAllproduct(){
    const body={
      offset: this.dtConfig.currentPage -1,
      limit: this.dtConfig.itemsPerPage,
    }
    this.api.post(environment.allproduct,body).subscribe(
      res=>{
        this.productlisting=res.items;
        this.dtConfig.totalItems = res.totalItems; 
      }
    )
   }
   limitChanged(value) {
    this.dtConfig.itemsPerPage = value;
    this.dtConfig.currentPage = 1;
    this.LoadAllproduct();
  }

  pageChanged(event) {
    this.dtConfig.currentPage = event;
    
    this.LoadAllproduct();
  }
  

  deleteSubcategory(id){
    console.log(id);
    this.deleteid=id;
    this.showmodal=true;
  }
  close(){
    this.showmodal=false;
  }
  delete(){
    this.api.delete(environment.deleteproduct +"/"+ this.deleteid).subscribe(
      res=>{
        if(res){

          this.showmodal=false;
          this.LoadAllproduct();
        }
       
      }
    )
  }
  searchproduct(event){
    console.log("search",event);
    this.api.post(environment.searchproduct, {searchValue:event} ).subscribe(
      res=>{
        console.log("res", res);
        this.productlisting=res.data;
        this.dtConfig.totalItems = res.recordsTotal;
      }
    )
  }
}
