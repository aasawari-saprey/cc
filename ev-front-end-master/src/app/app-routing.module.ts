import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';



import { LoginComponent } from './login/login.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { SignupComponent } from './signup/signup.component';
import { AddProductComponent } from './add-product/add-product.component';
const routes: Routes = [
  

  {path : '' , component : AboutComponent},
  {path:'add',component:AddProductComponent},
  
  {path : 'login', component : LoginComponent},
  {path : 'signup' , component : SignupComponent},
  
  {path : 'popup' , component : PopUpComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes , {anchorScrolling : 'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
