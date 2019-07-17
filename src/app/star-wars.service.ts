import { LogService } from 'src/app/log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/internal/Observable';
import { Page } from 'src/app/pagination-page';

@Injectable()
export class StarWarsService {
  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  character;
  starship;
  vehicle;
  planet;
  film;

  private logService: LogService;
  charactersChanged = new Subject<void>();
  characterFetched = new Subject<void>();
  starshipFeteched = new Subject<void>();
  vehicleFetched = new Subject<void>();
  planetFetched = new Subject<void>();
  filmFetched = new Subject<void>();
  http: Http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

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
        const char = response.json();
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
      })
      .subscribe(data => {
        console.log(data);
        this.character = data;
        this.characterFetched.next();
      });
  }

  fetchPlanetDetails(url: string) {
    this.http
      .get('https://cors-anywhere.herokuapp.com/' + url)
      .map((response: Response | any) => {
        const planet = response.json();
        return {
          name: planet.name,
          rotation_period: planet.rotation_period,
          orbital_period: planet.orbital_period,
          diameter: planet.diameter,
          climate: planet.diameter,
          gravity: planet.gravity,
          terrain: planet.terrain,
          surface_water: planet.surface_water,
          population: planet.population,
          residents: planet.residents,
          films: planet.films,
          created: planet.created,
          edited: planet.edited,
          url: planet.url
        };
      })
      .subscribe(data => {
        console.log(data);
        this.planet = data;
        this.planetFetched.next();
      });
  }

  fetchFilmDetails(url: string) {
    this.http
      .get('https://cors-anywhere.herokuapp.com/' + url)
      .map((response: Response | any) => {
        const film = response.json();
        return {
          title: film.title,
          opisodeId: film.episode_id,
          openingCrawl: film.opening_crawl,
          director: film.director,
          producer: film.producer,
          releaseDate: film.release_date,
          characters: film.characters,
          planets: film.palents,
          starships: film.starships,
          vehicles: film.vehicles,
          species: film.species,
          created: film.created,
          edited: film.edited,
          url: film.url
        };
      })
      .subscribe(data => {
        console.log(data);
        this.film = data;
        this.filmFetched.next();
      });
  }

  fetchStarshipDetails(url: string) {
    this.http
      .get('https://cors-anywhere.herokuapp.com/' + url)
      .map((response: Response | any) => {
        const starship = response.json();
        return {
          name: starship.name,
          model: starship.model,
          manufacturer: starship.manufacturer,
          costInCredits: starship.cost_in_credits,
          length: starship.length,
          maxAtmospheringSpeed: starship.max_atmosphering_speed,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapacity: starship.cargo_capacity,
          consumables: starship.consumables,
          hyperdriveRating: starship.hyperdrive_rating,
          mglt: starship.MGLT,
          starshipClass: starship.starship_class,
          pilots: starship.pilots,
          films: starship.films,
          created: starship.created,
          edited: starship.edited,
          url: starship.url
        };
      })
      .subscribe(data => {
        console.log(data);
        this.starship = data;
        this.starshipFeteched.next();
      });
  }

  fetchVehicleDetails(url: string) {
    this.http
      .get('https://cors-anywhere.herokuapp.com/' + url)
      .map((response: Response | any) => {
        const vehicle = response.json();
        return {
          name: vehicle.name,
          model: vehicle.model,
          manufacturer: vehicle.manufacturer,
          costInCredits: vehicle.cost_in_credits,
          length: vehicle.length,
          maxAtmosphering: vehicle.max_atmosphering_speed,
          crew: vehicle.crew,
          passengers: vehicle.passengers,
          cargoCapacity: vehicle.cargoCapacity,
          consumbles: vehicle.consumles,
          vehicleClass: vehicle.vehicle_class,
          pilots: vehicle.polits,
          films: vehicle.films,
          created: vehicle.created,
          edited: vehicle.edited,
          url: vehicle.edited
        };
      })
      .subscribe(data => {
        console.log(data);
        this.vehicle = data;
        this.vehicleFetched.next();
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

  getCharacter() {
    return this.character;
  }

  getPlanet() {
    return this.planet;
  }

  getFilm() {
    return this.film;
  }

  getStarship() {
    return this.starship;
  }

  getVehicle() {
    return this.vehicle;
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

  queryPaginated<T>(
    http: HttpClient,
    baseUrl: string,
    urlOrFilter?: string | object
  ): Observable<Page<T>> {
    let params = new HttpParams();
    let url = baseUrl;

    if (typeof urlOrFilter === 'string') {
      url = urlOrFilter;
    } else if (typeof urlOrFilter === 'object') {
      Object.keys(urlOrFilter)
        .sort()
        .forEach(key => {
          const value = urlOrFilter[key];
          if (value !== null) {
            params = params.set(key, value.toString());
          }
        });
    }

    return http.get<Page<T>>(url, {
      params: params
    });
  }
}
