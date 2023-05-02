import { Component } from '@angular/core';
import { CreateService } from 'src/app/service/create.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  data={
    accountNumber:"",
    balance:"",
  }

  constructor(private dl:MatSnackBar ,private deposit:CreateService){}


  btnclick(){
    this.dl.open("Amount deposited  Sucessfully","Okay");

  }

  doSubmitForm(){

    if(this.data.accountNumber==""){
      this.dl.open("fields cannot be empty","Okay");
      return;

    }
    this.deposit.depositaccount(this.data).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
      )
      console.log(this.data)
    }



}
