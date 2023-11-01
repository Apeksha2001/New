import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastrService  } from 'ngx-toastr';
import { Router } from '@angular/router';





@Component({
  selector: 'app-add-customer-csv',
  templateUrl: './add-customer-csv.component.html',
  styleUrls: ['./add-customer-csv.component.css']
})
export class AddCustomerCsvComponent implements OnInit {
  selectedFile: File | null = null;


  constructor(private service: HttpService,
              private toaster:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
  }
  uploadCSV() {
    if (this.selectedFile) {
      console.log(this.selectedFile)
      const formData = new FormData();
      formData.append('csvFile', this.selectedFile);
  
      this.service.uploadCSVFile(this.selectedFile)
        .subscribe((response) => {
          this.toaster.success("File uploaded successfully");
          
        });
    } else {
      this.toaster.error("No file selected");

    }
  }

  onFileSelected(event:any){
    // event.target.files[0];
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile);

    const fileNameLabel = document.querySelector('.custom-file-label') as HTMLElement;
    fileNameLabel.textContent = this.selectedFile?.name ?? 'No file selected';


  }
  
}


