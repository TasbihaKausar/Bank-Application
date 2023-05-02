import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateService } from 'src/app/service/create.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  data={
    accountNumber:"",
    customerName:"",
    balance:""
  }

 

// data = {
//   accountNumber: ['', Validators.required],
//   customerName: ['', Validators.required],
//   balance: ['', Validators.required]
// };

 
  constructor(private snack:MatSnackBar, private create:CreateService){}

  btnclick()
  {
    this.snack.open("Account created Sucessfully","Okay");
  }

  doSubmitForm(){

    if(this.data.accountNumber=="" || this.data.customerName=="" || this.data.balance==""){
      this.snack.open("fields cannot be empty","Okay");
      return;

    }
    this.create.createaccount(this.data).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
      )
      console.log(this.data);      }
    

  }




