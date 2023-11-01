import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl ='http://localhost:9090/';

  constructor(private http: HttpClient) { }


  login(obj:any){
    let employeeId=+obj;
    return (this.http.post(`${this.apiUrl}employee/checkEmployeeId/${employeeId}`,null,{
      responseType:'text'
    }));
  }

  sendOTP(){
   return ( this.http.get(`${this.apiUrl}getOTP`,{
      responseType:'text'
    }))
  }

  getAllCustomerBillRecord(){
    return (this.http.get(`${this.apiUrl}Bill-Payment/getAllCusomerBillData`));
  }

  updatePendingStatus(obj:any){
    return (this.http.put(`${this.apiUrl}Bill-Payment/payBill`,obj,{
      responseType:'text'
    }));
  }

  // getAllCustomerData(){
  //   return (this.http.get(`${this.apiUrl}customer-data/getAllCusomerData`))
  // }

  addCustomerBillData(obj:any){
    return (this.http.post(`${this.apiUrl}Bill-Payment/addCustomerBill`,obj,{
      responseType:'text'
    }));

  }

  uploadCSVFile(file: File) {
    const formData = new FormData();
    formData.append('csvFile', file);

    return this.http.post(`${this.apiUrl}Bill-Payment/uploadBulk`, formData);
  
 
  }


  getSpecificBillData(billid:any){
    let id=+billid;
    return (this.http.get(`${this.apiUrl}Bill-Payment/getById/${id}`))
}


 getInvoiceData(billid:any){
  let id=+billid;
  return(this.http.get(`${this.apiUrl}invoice/getInvoiceInfo/${id}`));
}

  getPaymentTrakingData(){
    return (this.http.get(`${this.apiUrl}getAllPaymentDetails`))


}

getCustomerData(){
  return (this.http.get(`${this.apiUrl}customer-data/getAllCusomerData`))


}

addCustomerData(obj:any){
  return (this.http.post(`${this.apiUrl}customer-data/addCustomerData`,obj,{
    responseType:'text'
  }));

}

addEmployeeData(obj:any){
  return (this.http.post(`${this.apiUrl}employee/add-employee`,obj,{
    responseType:'text'
  }));

}
 



}
