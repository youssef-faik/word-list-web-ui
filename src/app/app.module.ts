import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordsModule } from './words/words.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ConfirmDialogComponent],
  imports: [BrowserModule, WordsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule {}
