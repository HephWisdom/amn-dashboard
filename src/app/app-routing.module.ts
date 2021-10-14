import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenComponent } from './authen/authen.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { DashComponentComponent } from './dash-component/dash-component.component';
import { DashDisplayComponent } from './dash-display/dash-display.component';



const routes: Routes = [
  { path: '', component: AuthenComponent },
  { path: 'dashboard', component: DashDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
