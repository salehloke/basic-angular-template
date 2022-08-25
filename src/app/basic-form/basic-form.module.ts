import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormRoutingModule } from './basic-form-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbAccordion, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicFormComponent } from './basic-form.component';

@NgModule({
  imports: [FormsModule, NgbModule, BasicFormRoutingModule],
  declarations: [BasicFormComponent],
})
export class BasicFormModule {}
