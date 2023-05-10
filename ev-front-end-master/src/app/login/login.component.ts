import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private viewportscroller : ViewportScroller , private dataservice : DataserviceService, private router : Router, private dialog : MatDialog) { }
  enroll ='';
  password = '';
  result=[];
  ngOnInit(): void {
  }
  onClick(id : string){
    this.viewportscroller.scrollToAnchor(id);
  }
  login(){
    var result : number;
    const loginData={
      enroll : this.enroll,
      password : this.password,
    }

    if(this.enroll == ""|| this.password== ""){
      this.dialog.open(PopUpComponent);
    }
     else{
      this.dataservice.getUser(loginData.enroll)
      .subscribe((res : any)=>{
        console.log(res);
        this.result=this.result + res.length;
        this.result = res;
        console.log(this.result.length);
         

        if(this.result.length < 1 || res[0].password != loginData.password){
          console.log("User don't exist");
         this.router.navigateByUrl("login"); 
        this.dialog.open(PopUpComponent);
         
       }
       else{
        //this.dataservice.getToaster();
        console.log("User exists");
        setTimeout(() => {
          this.router.navigateByUrl("about"); 
        }, 3000);
        this.router.navigateByUrl("");
        //this.dataservice.dataService=loginData.email;
        }
     })

    }

         
         
        
        
    
     
    
  }

 
}
