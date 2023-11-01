import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerBillDataComponent } from './customer-bill-data/customer-bill-data.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddCustomerManualComponent } from './add-customer-manual/add-customer-manual.component';
import { AddCustomerCsvComponent } from './add-customer-csv/add-customer-csv.component';
import { LoginComponent } from './login/login.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { TransactionTrakingComponent } from './transaction-traking/transaction-traking.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { AbcdComponent } from './abcd/abcd.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeComponent } from './employee/employee.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CustomerBillDataComponent,
    AddCustomerManualComponent,
    AddCustomerCsvComponent,
    LoginComponent,
    ViewBillComponent,
    TransactionTrakingComponent,
    NotfoundComponent,
    CustomerDataComponent,
    AbcdComponent,
    SidebarComponent,
    EmployeeComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
