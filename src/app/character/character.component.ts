import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'src/app/star-wars.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characterUrl: string;
  subscription: Subscription;
  character;

  constructor(
    private route: ActivatedRoute,
    private swService: StarWarsService
  ) {}

  birth_year: string;
  created: Date;
  edited: Date;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: number;
  homeworld: string;
  mass: number;
  name: string;
  skin_color: string;
  url: string;

  films: string[];
  speciess: string[];
  starships: string[];
  vehicles: string[];

  ngOnInit() {
    this.route.params.subscribe(params => (this.characterUrl = params.url));

    this.swService.fetchCharacterDetails(this.characterUrl);

    this.subscription = this.swService.characterFetched.subscribe(() => {
      this.character = this.swService.getCharacter();
      this.birth_year = this.character.birth_year;
      this.created = this.character.created;
      this.edited = this.character.edited;
      this.eye_color = this.character.eye_color;
      this.films = this.character.films;
      this.gender = this.character.gender;
      this.hair_color = this.character.hair_color;
      this.height = this.character.height;
      this.homeworld = this.character.homeworld;
      this.mass = this.character.mass;
      this.name = this.character.name;
      this.skin_color = this.character.skin_color;
      this.speciess = this.character.species;
      this.vehicles = this.character.vehicles;
      this.starships = this.character.starships;
    });
  }
}
