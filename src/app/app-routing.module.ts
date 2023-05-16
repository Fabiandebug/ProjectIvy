import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: SideBarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
