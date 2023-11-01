import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerBillDataComponent } from './customer-bill-data/customer-bill-data.component';
import { AddCustomerCsvComponent } from './add-customer-csv/add-customer-csv.component';
import { AddCustomerManualComponent } from './add-customer-manual/add-customer-manual.component';
import { LoginComponent } from './login/login.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { TransactionTrakingComponent } from './transaction-traking/transaction-traking.component';
import { AuthguardGuard } from './authguard.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { AbcdComponent } from './abcd/abcd.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardGuard]},
  {path:'customer-bill-data',component:CustomerBillDataComponent,canActivate:[AuthguardGuard]},
  {path:'add-customer-manual',component:AddCustomerManualComponent,canActivate:[AuthguardGuard]},
  {path:'add-customer-csv',component:AddCustomerCsvComponent,canActivate:[AuthguardGuard]},
  {path:'viewbill/:id',component:ViewBillComponent,canActivate:[AuthguardGuard]},
  {path:'transaction-tracking',component:TransactionTrakingComponent,canActivate:[AuthguardGuard]},
  {path:'customer-data',component:CustomerDataComponent,canActivate:[AuthguardGuard]},
  {path:'abcd',component:AbcdComponent,canActivate:[AuthguardGuard]},
  {path:'employee',component:EmployeeComponent},
  // {path:'sidebar',component:SidebarComponent},
  {
    path:"**",component:NotfoundComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
