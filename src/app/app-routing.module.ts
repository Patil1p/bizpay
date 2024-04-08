import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shered/components/home/home.component';
import { ExpensesComponent } from './shered/components/expenses/expenses.component';
import { WalletComponent } from './shered/components/wallet/wallet.component';
import { ReportsComponent } from './shered/components/reports/reports.component';
import { MoneyComponent } from './shered/components/money/money.component';
import { SettingComponent } from './shered/components/setting/setting.component';
import { PageNotFoundComponent } from './shered/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path : '', redirectTo: 'home',
  pathMatch: 'full'
},

{
  path: 'home', component:HomeComponent
},
{
  path : 'expenses', component : ExpensesComponent 
},
{
  path : 'reports', component : ReportsComponent
},
{
  path : 'wallet',component : WalletComponent
},
{
  path : 'money' ,component: MoneyComponent
},
{
  path : 'setting' ,component: SettingComponent
},
{
  path : 'page-not-found',component: PageNotFoundComponent
},
{
 path : '**',redirectTo:'page-not-found'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
