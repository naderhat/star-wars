import { LogService } from 'src/app/log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: Http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  /*
  fetchCharacters() {
    this.http
      .get('https://swapi.co/api/people')
      .subscribe((response: Response | any) => {
        console.log(response);
      });
  }
  */

  fetchCharacters() {
    this.http
      .get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people')
      .map((response: Response | any) => {
        const data = response.json();
        const extractedChars = data.results;
        const chars = extractedChars.map(char => {
          return { name: char.name, side: '', url: char.url };
        });
        return chars;
      })
      .subscribe(data => {
        console.log(data);
        this.characters = data;
        this.charactersChanged.next();
      });
  }

  fetchCharacterDetails(url: string) {
    this.http
      .get('https://cors-anywhere.herokuapp.com/' + url)
      .map((response: Response | any) => {
        const character = response.json();
        const chars = character.map(char => {
          return {
            name: char.name,
            height: char.height,
            mass: char.mass,
            hair_color: char.hair_color,
            skin_color: char.skin_color,
            eye_color: char.eye_color,
            birth_year: char.birth_year,
            gender: char.gender,
            homeworld: char.homeworld,
            films: char.films,
            species: char.species,
            vehicles: char.vehicles,
            starships: char.starships,
            created: char.created,
            edited: char.edited,
            url: char.url
          };
        });
      });
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter(char => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog(
      'Changed side of ' + charInfo.name + ', new side: ' + charInfo.side
    );
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex(char => {
      return char.name === name;
    });

    console.log('pos: ' + pos);

    if (pos !== -1) {
      return;
    }

    const newChar = { name: name, side: side };
    this.characters.push(newChar);
    console.log(this.characters);
  }
}
