import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { HeaderComponent } from './header/header.component';
import { PayrollheaderComponent } from './payrollheader/payrollheader.component';
import { PayrollhomeComponent } from './payrollhome/payrollhome.component';


const routes: Routes = [
  {path: 'addpayroll' , component: PayrollhomeComponent},
  {path: 'details' , component: PayrollheaderComponent},
  // {path: 'header' , component: HeaderComponent},
  {path: '',   redirectTo:'details',  pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const rountingComponent = [PayrollheaderComponent,PayrollhomeComponent,AddemployeeComponent];
