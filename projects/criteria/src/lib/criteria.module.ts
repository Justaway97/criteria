import { NgModule } from '@angular/core';
import { CriteriaComponent } from './criteria.component';
import { WhereComponent } from './where.component';

@NgModule({
  declarations: [
    CriteriaComponent,
    WhereComponent,
  ],
  imports: [
  ],
  exports: [
    CriteriaComponent
  ]
})
export class CriteriaModule { }
