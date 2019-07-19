import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Page } from 'src/app/pagination';
import { CharacterComponent } from 'src/app/character/character.component';
import { StarWarsService } from 'src/app/star-wars.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {
  baseUrl = 'https://swapi.co/api/people';
  swService: StarWarsService;

  constructor(private http: HttpClient, swService: StarWarsService) {
    this.swService = swService;
  }

  list(urlOrFilter?: string | object): Observable<Page<CharacterComponent>> {
    return this.swService.queryPaginated<CharacterComponent>(
      this.http,
      this.baseUrl,
      urlOrFilter
    );
  }
}
