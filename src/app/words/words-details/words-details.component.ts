import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IWord, Word } from '../../core/words/words.model';
import { WordsService } from '../../core/words/words.service';
import { Observable, of } from 'rxjs';
import { DialogsService } from '../../dialogs/dialogs.service';
import { CanComponentDeactivate } from '../../guard/can-deactivate-guard.guard';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-words-details',
  templateUrl: './words-details.component.html',
  styleUrls: ['./words-details.component.css'],
})
export class WordsDetailsComponent implements OnInit, CanComponentDeactivate {
  word: IWord;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wordsService: WordsService,
    private dialogsService: DialogsService
  ) {}

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    (id
      ? this.wordsService.getWord(id)
      : of(new Word('', 'Test name'))
    ).subscribe(
      (data) => {
        this.word = data;
        this.name = data.name;
      },
      (err) => {
        this.word = new Word('', 'Test name');
        this.name = 'Test name';
      }
    );
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.word.name === this.name) {
      return true;
    }
    return this.dialogsService.confirm('Discard changes?');
  }

  save(): void {
    const wordToSave = new Word(this.word.id, this.name);
    this.wordsService.save(wordToSave).subscribe(
      (data) => {
        Object.assign(this.word, {
          name: data.name,
        });
        this.goBack();
      },
      (error) => {
        console.error(error);
        alert(`Save error`);
      }
    );
  }

  goBack(): void {
    this.router.navigate([this.word.id ? '../../' : '../'], {
      relativeTo: this.route,
      replaceUrl: true,
    });
  }
}
