import { Component, OnInit } from '@angular/core';
import { ApiWrapperService } from 'src/app/services/api.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

  categoriesall: any;
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
    this.LoadAllSubcategory();
  }
  LoadAllSubcategory(){
   
    const body={
      page: this.dtConfig.currentPage,
      limit: this.dtConfig.itemsPerPage,
    }
    this.api.post(environment.subcategorylisting,body).subscribe(
      res=>{
        this.categoriesall=res.data;
        this.dtConfig.totalItems = res.recordsTotal; 
      }
    )
   }
   limitChanged(value) {
    this.dtConfig.itemsPerPage = value;
    this.dtConfig.currentPage = 1;
    this.LoadAllSubcategory();
  }

  pageChanged(event) {
    this.dtConfig.currentPage = event;
    
    this.LoadAllSubcategory();
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
          this.LoadAllSubcategory();
        }
       
      }
    )
  }
  searchsubcategory(event){
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

