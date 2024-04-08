import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shered/components/header/header.component';
import { SidenavComponent } from './shered/components/sidenav/sidenav.component';

import { HomeComponent } from './shered/components/home/home.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';


import { ExpensesComponent } from './shered/components/expenses/expenses.component';
import { ReportsComponent } from './shered/components/reports/reports.component';
import { WalletComponent } from './shered/components/wallet/wallet.component';
import { MoneyComponent } from './shered/components/money/money.component';
import { SettingComponent } from './shered/components/setting/setting.component';
import { PageNotFoundComponent } from './shered/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
  
        HomeComponent,
       ExpensesComponent,
       ReportsComponent,
       WalletComponent,
       MoneyComponent,
       SettingComponent,
       PageNotFoundComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
