import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'src/app/star-wars.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input()
  queryParams: {
    [url: string]: any;
  };

  characterUrl: string;
  sub;
  subscription: Subscription;
  character;

  constructor(
    private route: ActivatedRoute,
    private swService: StarWarsService
  ) {}

  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
  created: Date;
  edited: Date;

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => (this.characterUrl = params.url)
    );

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
    });
    console.log(this.characterUrl);
  }
}
