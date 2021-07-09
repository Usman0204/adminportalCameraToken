import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ApiWrapperService } from 'src/app/services/api.services';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.scss']
})
export class AddsubcategoryComponent implements OnInit {
  categoriesall: any;
  model:any={};
  constructor(private _location: Location, private api:ApiWrapperService) { }

  ngOnInit(): void {
    this.LoadAllCategory();
  }
  goBack() {
    this._location.back();
  }

  LoadAllCategory(){
    this.api.get(environment.categoryall).subscribe(
      res=>{
        this.categoriesall=res.data;
      }
    )
   }

   addSubcategory(){
     this.model.imageName="demo"
    this.api.post(environment.addcategory, this.model).subscribe(
      res=>{
        // this.categoriesall=res.data;
      }
    )
   }
}
