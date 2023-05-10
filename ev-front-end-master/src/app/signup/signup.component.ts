import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router : Router, private dataservice : DataserviceService, private dialog : MatDialog) { }

  ngOnInit(): void {
  }
  enroll="";
  name="";
  password="";
  pnumber="";
  
  result=[];
  signup(){
    var result : number;
    const signupData={
      enroll : this.enroll,
      name : this.name,
      phone : this.pnumber,
      password : this.password
     }
     console.log(signupData);
    if(this.name==""  || this.enroll == "" || this.pnumber == "" || this.password== "")
    this.dialog.open(PopUpComponent);

     else{
      this.dataservice.getUser(signupData.enroll)
      .subscribe((res : any)=>{
        console.log(res);
        //this.result=this.result + res.length;
        this.result = res;
        console.log(this.result.length);
         

        if(this.result.length){
          console.log("User exists");
          //this.router.navigateByUrl("sign-up");
          this.dialog.open(PopUpComponent); 
       }
       else{
           
        //    console.log(result)
           this.dataservice.createUser(signupData)
            .subscribe((res : any)=>{
              console.log(res);
            })  
            this.router.navigateByUrl("login");

        }
     })

    }

         
         
        
        
    
     
    
  }
}

