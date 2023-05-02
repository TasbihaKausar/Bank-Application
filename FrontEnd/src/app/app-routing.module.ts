import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ViewbalanceComponent } from './components/viewbalance/viewbalance.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
const routes: Routes = [
  {
    path:"create",
    component:CreateComponent,
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"delete",
    component:DeleteComponent,
    pathMatch:"full"
  },
  {
    path:"viewbalance",
    component:ViewbalanceComponent,
    pathMatch:"full"
  },
  {
    path:"deposit",
    component:DepositComponent,
    pathMatch:"full"
  },
  {
    path:"withdraw",
    component:WithdrawComponent,
    pathMatch:"full"
  },
  {
    path:"transfer",
    component:TransferComponent,
    pathMatch:"full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
