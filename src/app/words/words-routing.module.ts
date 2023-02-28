import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {WordsDetailsComponent} from './words-details/words-details.component';
import {WordsListComponent} from './words-list/words-list.component';
import {CanDeactivateGuardGuard} from '../guard/can-deactivate-guard.guard';

const routes: Routes = [
  {
    path: 'words',
    component: WordsListComponent,
    data: {animation: 'master'}
  }, {
    path: 'words/detail',
    component: WordsDetailsComponent,
    canDeactivate: [CanDeactivateGuardGuard],
    data: {animation: 'detail'}
  }, {
    path: 'words/detail/:id',
    component: WordsDetailsComponent,
    canDeactivate: [CanDeactivateGuardGuard],
    data: {animation: 'detail'}
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule {
}
