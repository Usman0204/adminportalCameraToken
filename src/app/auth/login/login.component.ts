import { Component, OnInit } from '@angular/core';
import { ApiWrapperService } from 'src/app/services/api.services';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errormsg: any;
  showerror: boolean;

  constructor(private api:ApiWrapperService,private router:Router) { }
  model:any={};
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.model);
    this.api.post(environment.login, this.model).subscribe(
      res=>{
        console.log(res);
        if(res.status==true){
           this.router.navigateByUrl('/dashboard/main');
           localStorage.setItem('token',res.token)
        }
        else{
        this.errormsg=res.msg;
        this.showerror=true;
        setTimeout(() => {
          this.showerror=false;
         
        }, 3000);
      }
      }
    )
    
  }
}
