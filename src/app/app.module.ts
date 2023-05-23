import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component'

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SalesTableComponent } from './table/sales-table/sales-table/sales-table.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { WaitersComponent } from './table/waiters/waiters.component';
import { ResTablesComponent } from './table/res-tables/res-tables.component';
import { BillsComponent } from './table/bills/bills.component';
import { CustomersComponent } from './table/customers/customers.component';
import { CustomerFormComponent } from './forms/customer-form/customer-form.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesError404Component,
    DashboardComponent,
    SideBarComponent,

    SalesTableComponent,
    BarChartComponent,
    LineChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    WaitersComponent,
    ResTablesComponent,
    BillsComponent,
    CustomersComponent,
    CustomerFormComponent ,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
