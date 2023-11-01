import { Component, OnInit } from '@angular/core';
import { CustomerData } from '../model/CustomerData';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {

  customerData:any[]=[];
  obj:any=<CustomerData>{};
  p:number=1;

  constructor(private httpservice:HttpService,
    private toaster:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.GetAllData();
  }

  GetAllData(){
    this.httpservice.getCustomerData()
    .subscribe((response:any)=>{
      this.customerData=response
    });
  }
  addBill(){
    this.router.navigate(['/add-customer-manual'])
  }
  navigateToAddCustomer(){
    this.router.navigate(['/abcd'])
    
  }

}
