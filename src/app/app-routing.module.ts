import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ModalFormComponent } from './modal-form/modal-form.component';

const routes: Routes = [
  {
    path: '',
    component: BasicFormComponent,
  },
  {
    path: 'modal-form',
    component: ModalFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
