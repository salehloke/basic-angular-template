import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicFormModule } from './basic-form/basic-form.module';

const routes: Routes = [
  {
    path: '',
    component: BasicFormModule,
  },
  {
    path: 'basic-form',
    component: BasicFormModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
