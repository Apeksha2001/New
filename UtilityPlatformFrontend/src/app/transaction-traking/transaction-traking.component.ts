import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-transaction-traking',
  templateUrl: './transaction-traking.component.html',
  styleUrls: ['./transaction-traking.component.css']
})
export class TransactionTrakingComponent implements OnInit {

  paymentTrakingData:any[]=[];

  constructor(private httpservice:HttpService) { }

  ngOnInit(): void {
    this.GetAllData();
  }

  GetAllData(){
    this.httpservice.getPaymentTrakingData()
    .subscribe((response:any)=>{
      this.paymentTrakingData=response;
    })
  }



}
