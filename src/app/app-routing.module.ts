import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
    { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, 
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
    exports: [RouterModule]
})
export class AppRoutingModule { }
