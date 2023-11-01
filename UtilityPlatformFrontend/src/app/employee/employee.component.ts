import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employee';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employeeData:employee=<employee>{};

  constructor(private service:HttpService,
    private toaster:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.service.addEmployeeData(this.employeeData)
    .subscribe((response:any)=>{
      console.log(response);
      this.toaster.success("Employee Data Added Successfully")
      this.router.navigate(['/customer-data']);



    })
    
  }

}
