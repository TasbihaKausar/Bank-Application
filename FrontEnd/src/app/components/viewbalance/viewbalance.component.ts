import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateService } from 'src/app/service/create.service';


@Component({
  selector: 'viewbalance',
  templateUrl: './viewbalance.component.html',
  styleUrls: ['./viewbalance.component.css']
})
export class ViewbalanceComponent{
  data={
    accountNumber:"",
    customerName:"",
    balance:""
  }

  aaa !: any[];
  agg!: any[];
  accountNumber!:String;
  customerName!:string;
  balance!:number;




constructor(private dl:MatSnackBar ,private view:CreateService){}

btnclick()
{
  //this.dl.open("Account deleted Sucessfully","Okay");
  //  this.view.viewbalance(this.data).subscribe(
  //   response=>
  //  )
}

// ngOnInit() {
//   this.del.getBalance().subscribe((balance: number) => {
//     this.balance = balance;
//   });
// }



doSubmitForm(){

  if(this.data.accountNumber==""){
    this.dl.open("fields cannot be empty","Okay");
    return;

  }
  this.view.viewbalance(this.data.accountNumber).subscribe(
    (response:any)=>{
      console.log(response);
      const ab = response;
      //console.log(ac)
      
      this.accountNumber = ab.accountNumber;
      this.balance=ab.balance;
      this.customerName = ab.customerName;
      
    },
    error=>{
      console.log(error);
    }
    )
    console.log(this.data);      }
}

