import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormCreateComponent } from './form-create.component';

@NgModule({
  declarations: [FormCreateComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormCreateComponent]
})
export class FormCreateModule {}
