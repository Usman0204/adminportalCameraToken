import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { ApiWrapperService } from 'src/app/services/api.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {
  errormsg: any;
  showerror: boolean;
  model:any={};
  base64textString: any;
  categoriesall: any;
  subcategoriesall: any;
  id: number;
  base64: string;
  constructor(private api:ApiWrapperService,private route: ActivatedRoute,private _location: Location) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
        }
      );
    this.api.get(environment.findbyid+"/"+this.id).subscribe(
      res=>{
        console.log(res);
        this.model=res.item[0];
        console.log(this.model);
        
      }
    )
   
  }

  goBack() {
    this._location.back();
  }
  updateProduct(){
    console.log(this.model);
    delete this.model.updatedAt;
    delete this.model.createdAt;
  
    this.model.image=this.base64textString;
     this.api.post(environment.updateproduct, this.model).subscribe(
       res=>{
         console.log(res);
         if(res.status==true)
         this.errormsg=res.msg;
        this.showerror=true;
      
        
        setTimeout(() => {
          this.showerror=false;
         
        }, 3000);
       }
     )
    }
    uploadFile(event){
      var files = event.target.files;
      var file = files[0];
      this.model.imageName=file.name;
    if (files && file) {
        var reader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64= btoa(binaryString);
        console.log(btoa(binaryString));      
        this.api.post(environment.uploadImage, {base64:this.base64}).subscribe(
          res=>{
            console.log(res);  
            this.model.link=res.image;
           }
          )
    }

}
