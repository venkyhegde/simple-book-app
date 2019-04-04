import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingComponent} from './rating/rating.component';
import {ConvertToSpacePipe} from './convert-to-space.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ RatingComponent, ConvertToSpacePipe],
  imports: [
    CommonModule
  ],
  exports: [RatingComponent, ConvertToSpacePipe, CommonModule, FormsModule]
})
export class SharedModule { }
