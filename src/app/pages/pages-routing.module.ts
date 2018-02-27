import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import
const routes: Routes = [  
  { path: '', component: PagesComponent,
  children: [
            { path: 'starter', loadChildren: './show/show.module#ShowModule' }
          ] 
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
