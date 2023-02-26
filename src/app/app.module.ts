import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordsModule } from './words/words.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
