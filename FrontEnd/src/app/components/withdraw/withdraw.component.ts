import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateService } from 'src/app/service/create.service';

@Component({
  selector: 'withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  data={
    accountNumber:"",
    balance:"",
  }

  constructor(private dl:MatSnackBar ,private withdraw:CreateService){}

  btnclick(){
    this.dl.open("Amount is Transfered Sucessfully","Okay");

  }


  doSubmitForm(){

    if(this.data.accountNumber==""){
      this.dl.open("fields cannot be empty","Okay");
      return;

    }
    this.withdraw.withdrawaccount(this.data).subscribe(
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
