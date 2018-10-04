import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TPersonListComponent } from './list/list.component';
import { TPersonModuleComponent } from './module/module.component';

const routes: Routes = [

  { path: 'list', component: TPersonListComponent },
  { path: 'module', component: TPersonModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TPersonRoutingModule { }
