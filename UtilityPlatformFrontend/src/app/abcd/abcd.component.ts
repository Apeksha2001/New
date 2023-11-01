import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerBillData } from '../model/CustomerBillData';
import { HttpService } from '../http.service';
import { ToastrService  } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CustomerData } from '../model/CustomerData';

@Component({
  selector: 'app-abcd',
  templateUrl: './abcd.component.html',
  styleUrls: ['./abcd.component.css']
})
export class AbcdComponent implements OnInit {

  customerData:CustomerData=<CustomerData>{};

  constructor(private service:HttpService,
    private toaster:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.service.addCustomerData(this.customerData)
    .subscribe((response:any)=>{
      console.log(response);
      this.toaster.success("Customer Data Added Successfully")
      this.router.navigate(['/customer-data']);



    })
    
  }


}
