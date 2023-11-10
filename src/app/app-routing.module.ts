import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; // Add this
import { HelpComponent } from './help/help.component'; // Add this
import { LoginComponent } from './login/login.component'; // Add this
import { HomeComponent } from './home/home.component'; // Add this 
import { DinnerComponent } from './dinner/dinner.component'; // Add this
import { RegisterComponent } from './register/register.component'; // Add this
import { DinnerdeatilsComponent } from './dinnerdeatils/dinnerdeatils.component'; // Add this
import { authguardGuard } from './authguard.guard'; // Add this


const routes: Routes = [
{
    component:AboutComponent ,canActivate:[authguardGuard],
    path:'about'
    
},
{
  component:HelpComponent,
  path:'help'
},
{
  component:HomeComponent,
  path:'home'
},
{
  component:LoginComponent,
  path:'login'
},
{
  component:DinnerComponent,canActivate:[authguardGuard],
  path:'dinner'

},
{
  component:RegisterComponent,
  path:'register'

},
{
  component:DinnerdeatilsComponent,
  path:'dinnerDetails'

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
