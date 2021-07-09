import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ApiWrapperService } from 'src/app/services/api.services';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {
  base64textString: string;
  errormsg: any;
  showerror: boolean;

  constructor(private _location: Location, private api:ApiWrapperService) { }
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
      
      
          this.base64textString= btoa(binaryString);
          console.log(btoa(binaryString));
  }

  addcategory(){
    console.log(this.model);
    this.model.image=this.base64textString;
     this.api.post(environment.addcategory, this.model).subscribe(
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
}
