import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateService } from 'src/app/service/create.service';


@Component({
  selector: 'delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  data={
    accountNumber:""
  }

  accountNumber!:String;


  constructor(private dl:MatSnackBar ,private del:CreateService){}

  btnclick()
  {
    
    this.dl.open("Account deleted Sucessfully","Okay");
    // this.del.deleteaccount(accountId).subscribe(
    //   Response
    // )
  }

 

  doSubmitForm(){

    if(this.data.accountNumber==""){
      this.dl.open("fields cannot be empty","Okay");
      return;

    }
    this.del.deleteaccount(this.data.accountNumber).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
      )
      console.log(this.data);      }

}
