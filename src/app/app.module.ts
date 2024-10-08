import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WordsModule} from './words/words.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ConfirmDialogComponent} from './dialogs/confirm-dialog/confirm-dialog.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {WordsService} from "./core/words/words.service";
import {DialogsService} from "./dialogs/dialogs.service";
import {CanDeactivateGuardGuard} from "./guard/can-deactivate-guard.guard";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ConfirmDialogComponent],
  imports: [
    BrowserModule,
    WordsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    WordsService,
    DialogsService,
    CanDeactivateGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
