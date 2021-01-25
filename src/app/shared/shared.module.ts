import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@angularMaterial/angular-material.module';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...fromComponents.components,
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
