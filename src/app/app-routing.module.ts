import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenComponent } from './authen/authen.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { DashComponentComponent } from './dash-component/dash-component.component';



const routes: Routes = [
  { path: 'dashboard', redirectTo: 'Sign-In', pathMatch: 'full'},
  // { path: 'Sign-In', component: AuthenComponent },
  // { path: 'dash', component: DashComponentComponent },
  // { path: 'dashboard/home', component: NavComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
