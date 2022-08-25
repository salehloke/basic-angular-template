import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form.component';

const routes: Routes = [
  {
    path: '',
    component: BasicFormComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BasicFormRoutingModule {}
