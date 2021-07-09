import { Component, OnInit } from '@angular/core';
import { ApiWrapperService } from 'src/app/services/api.services';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoriesall: any;
  dtConfig: any = {
    id: 'ordersHistory',
    itemsPerPage: 8,
    currentPage: 1,
    totalItems: 0
  };
  showmodal: boolean;
  deleteid: any;
  constructor(private api:ApiWrapperService) { }

  ngOnInit(): void {
    this.LoadAllCategory();
  }
  LoadAllCategory(){
   
    const body={
      page: this.dtConfig.currentPage,
      limit: this.dtConfig.itemsPerPage,
    }
    this.api.post(environment.categorieslisting,body).subscribe(
      res=>{
        this.categoriesall=res.data;
        this.dtConfig.totalItems = res.recordsTotal; 
      }
    )
   }
   limitChanged(value) {
    this.dtConfig.itemsPerPage = value;
    this.dtConfig.currentPage = 1;
    this.LoadAllCategory();
  }

  pageChanged(event) {
    this.dtConfig.currentPage = event;
    
    this.LoadAllCategory();
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
    this.api.delete(environment.deleteCateogory +"/"+ this.deleteid).subscribe(
      res=>{
        if(res){

          this.showmodal=false;
          this.LoadAllCategory();
        }
       
      }
    )
  }

  searchcategory(event){
    console.log("search",event);
    this.api.post(environment.searchCategory, {searchValue:event} ).subscribe(
      res=>{
        console.log("res", res);
        this.categoriesall=res.data;
        this.dtConfig.totalItems = res.recordsTotal;
      }
    )
  }
}