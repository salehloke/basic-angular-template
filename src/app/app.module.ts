import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent, BasicFormComponent],
})
export class AppModule {}
