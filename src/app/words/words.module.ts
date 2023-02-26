import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsDetailsComponent } from './words-details/words-details.component';
import { WordsListComponent } from './words-list/words-list.component';

@NgModule({
  declarations: [
    WordsDetailsComponent,
    WordsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WordsModule { }
