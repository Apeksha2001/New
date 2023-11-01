import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ToastrService  } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  idPattern="^[0-9]+$";
  otp:string='';
  msg:string="";
  isotpsend:boolean=true;
 
  constructor(private service:HttpService,
    private router:Router,
    private toaster:ToastrService) { }

  ngOnInit(): void {
    
  }

  onSubmit(f:NgForm){
    
    let employeeId=f.value.employeeId;
    let userotp=f.value.otp;
    console.log(employeeId)
    console.log(userotp)
    this.service.login(employeeId)
    .subscribe((response:any)=>{
      console.log(response);
      console.log(this.otp);
      console.log(userotp);
      if(response==="Valid User" && this.otp===userotp){
  
        sessionStorage.setItem("employeeId",employeeId);
        this.router.navigate(['/customer-data']);
      }else{
        this.toaster.error('Invalid user', 'Error', {
          positionClass: 'toast-top-center' // Customize the notification position
        });
      }
    })

  }
  sendOTP(){
    this.service.sendOTP().subscribe((response)=>{
      this.otp=response;
      this.toaster.info(`Your otp is ${response}`);
    })
    this.isotpsend=true;
  }
 
  

}
