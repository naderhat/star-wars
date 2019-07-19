import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { CharacterService } from 'src/app/pagingation-character.service';
import { CharacterComponent } from 'src/app/character/character.component';
import { Page } from 'src/app/pagination';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  startWith,
  merge,
  share,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  filterForm: FormGroup;
  page: Observable<Page<CharacterComponent>>;
  pageUrl = new Subject<string>();
  characterService: CharacterService;

  constructor(characterService: CharacterService) {
    this.characterService = characterService;
    this.filterForm = new FormGroup({
      is_available: new FormControl(),
      search: new FormControl()
    });

    this.page = this.filterForm.valueChanges.pipe(
      debounceTime(200),
      startWith(this.filterForm.value),
      merge(this.pageUrl),
      switchMap(urlOrFilter => this.characterService.list(urlOrFilter)),
      share()
    );
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }
}
