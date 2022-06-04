
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

import { ApiservicesService } from './services/apiservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';



  displayStyle = "none";
  users: any;
  users1: any;
  searchText:any
  display: string;
  invoicedetails: any;







  constructor( private fBuilder: FormBuilder,private userData:ApiservicesService) {
    this.userData.users().subscribe((data)=>{
     this.users=data
    })
  }
  insertform = new FormGroup({
    name:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
  });

  ngOnInit(){
  }
  openPopup1() {
    this.display = "block";
  }

  closePopup1() {
    this.display = "none";
  }
  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
  refresh() {
    window.location.reload();
  }

  submit(){
    console.log(this.insertform.value);
    alert("Inserted sucessfully...")
    this.refresh();
    this.userData.create(this.insertform.value).subscribe((result) => {
    console.log(result)
    })
    this.insertform.reset();
  }
  delete1(data: any){
    console.log(data)
    alert("Delete sucessfully...")
    this.refresh();
    this.userData.delete1(data).subscribe((result)=>{
    })
  }
  Addretainer(id:any) {
    this.userData.getcrud(id).subscribe(value => {
      this.users1 = value;
      console.log(this.users1);
      let formvalues = {
        name: this.users1.name,
        address: this.users1.address,
        mobile: this.users1.mobile,
      };
      this.insertform.patchValue(formvalues);
    });
  }
submit1(id:any){
  console.log(this.insertform.value);
  alert("Updated sucessfully...")
  this.userData.update(id,this.insertform.value).subscribe((result) => {
  console.log(result)
  })
  this.insertform.reset();
  this.refresh();
}
}

