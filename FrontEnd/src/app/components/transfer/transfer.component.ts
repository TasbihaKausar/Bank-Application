import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateService } from 'src/app/service/create.service';

@Component({
  selector: 'transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {

  data={
    accountNumber:"",
    toAccount:"",
    balance:""
  }

  constructor(private dl:MatSnackBar ,private transfer:CreateService){}

  btnclick(){
    this.dl.open("Amount is withdrawn Sucessfully","Okay");

  }

  doSubmitForm(){

    if(this.data.accountNumber=="" || this.data.toAccount=="" || this.data.balance==""){
      this.dl.open("fields cannot be empty","Okay");
      return;

    }
    this.transfer.transferaccount(this.data).subscribe(
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
