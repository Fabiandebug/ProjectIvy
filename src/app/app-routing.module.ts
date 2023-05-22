import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { BillsComponent } from './table/bills/bills.component';
import { CustomersComponent } from './table/customers/customers.component';
import { WaitersComponent } from './table/waiters/waiters.component';
import { ResTablesComponent } from './table/res-tables/res-tables.component';

import { PagesError404Component } from './pages/pages-error404/pages-error404.component';

const routes: Routes = [
  { path: 'sign-out', redirectTo:'login',pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: SideBarComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'waiters', component: WaitersComponent },
      { path: 'tables', component: ResTablesComponent },
      { path: 'bills', component: BillsComponent },
      { path: '**', component: PagesError404Component }
    ]
  },

  { path: '**', component: PagesError404Component } // Optional fallback route outside the SideBarComponent
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
