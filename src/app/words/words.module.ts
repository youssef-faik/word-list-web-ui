import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsDetailsComponent } from './words-details/words-details.component';
import { WordsListComponent } from './words-list/words-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {WordsRoutingModule} from "./words-routing.module";

@NgModule({
  declarations: [WordsDetailsComponent, WordsListComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    WordsRoutingModule
  ],
})
export class WordsModule {}
