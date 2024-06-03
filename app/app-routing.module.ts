import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssestComponent } from './assest/assest.component';
import { NoDataComponent } from './no-data/no-data.component';

const routes: Routes = [
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path :'dashboard',component:DashboardComponent
  },
  {
    path :'assest',component:AssestComponent
  },
  {
    path:'**',component:NoDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
