import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditorModule { }
