import { PageComponent } from './page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
