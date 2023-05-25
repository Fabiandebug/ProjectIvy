import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Materil Imports

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
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WaiterFormComponent } from './forms/waiter-form/waiter-form.component';
import { TablesFormComponent } from './forms/tables-form/tables-form.component';
import { BillsFormComponent } from './forms/bills-form/bills-form.component';
import { BillItemsComponent } from './table/bills/bill-items/bill-items.component';









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
    CustomerFormComponent,
    WaiterFormComponent,
    TablesFormComponent,
    BillsFormComponent,
    BillItemsComponent ,


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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
