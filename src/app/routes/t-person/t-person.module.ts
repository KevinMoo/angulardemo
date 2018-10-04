import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TPersonRoutingModule } from './t-person-routing.module';
import { TPersonListComponent } from './list/list.component';
import { TPersonModuleComponent } from './module/module.component';

const COMPONENTS = [
  TPersonListComponent,
  TPersonModuleComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    TPersonRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class TPersonModule { }
