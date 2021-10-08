import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { PayrollheaderComponent } from './payrollheader/payrollheader.component';
import { PayrollhomeComponent } from './payrollhome/payrollhome.component';


const routes: Routes = [
  {path: 'details' , component: PayrollheaderComponent},
  {path: 'addpayroll' , component: PayrollhomeComponent},
  {path: '',   redirectTo:'details',  pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const rountingComponent = [PayrollheaderComponent,PayrollhomeComponent,AddemployeeComponent];
