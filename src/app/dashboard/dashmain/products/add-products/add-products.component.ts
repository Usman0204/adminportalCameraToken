import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { environment } from 'src/environments/environment';
import { ApiWrapperService } from 'src/app/services/api.services';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  base64textString: string;
  errormsg: any;
  showerror: boolean;

  base64: string;

  constructor(private _location: Location,private api:ApiWrapperService) { }
  model:any={};
  ngOnInit(): void {
   
  }
  goBack() {
    this._location.back();
  }

  
  uploadFile(event) {
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
  }




  addproduct(){
    console.log(this.model);
    

    this.api.post(environment.uploadImage, {base64:this.base64}).subscribe(
      res=>{
        console.log(res);
        if(res){
          this.model.link=res.image;
          this.api.post(environment.addproduct, this.model).subscribe(
                res=>{
                  console.log(res);
                  if(res.status==true)
                  this.errormsg=res.msg;
                  this.showerror=true;
                  this.model={};
                  
                  setTimeout(() => {
                    this.showerror=false;
                  
                  }, 3000);
                }
              )
        }
      }
    )
    
    }
}
