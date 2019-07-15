import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'src/app/star-wars.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  starshipUrl: string;
  subscription: Subscription;
  starship;

  name: string;
  model: string;
  manufacturer: string;
  costInCredits: number;
  length: number;
  maxAtmospheringSpeed: string;
  crew: number;
  passengers: number;
  cargoCapacity: number;
  consumables: string;
  hyperdriveRating: number;
  mglt: number;
  starshipClass: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;

  constructor(
    private route: ActivatedRoute,
    private swService: StarWarsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => (this.starshipUrl = params.url));

    this.swService.fetchStarshipDetails(this.starshipUrl);

    this.subscription = this.swService.starshipFeteched.subscribe(() => {
      this.starship = this.swService.getStarship();

      this.name = this.starship.name;
      this.model = this.starship.model;
      this.manufacturer = this.starship.manufacturer;
      this.costInCredits = this.starship.costInCredits;
      this.length = this.starship.length;
      this.maxAtmospheringSpeed = this.starship.maxAtmospheringSpeed;
      this.crew = this.starship.crew;
      this.passengers = this.starship.passengers;
      this.cargoCapacity = this.starship.passengers;
      this.consumables = this.starship.consumables;
      this.hyperdriveRating = this.starship.hyperdriveRating;
      this.mglt = this.starship.mglt;
      this.starshipClass = this.starship.starshipClass;
      this.pilots = this.starship.pilots;
      this.films = this.starship.films;
      this.created = this.starship.created;
      this.edited = this.starship.edited;
      this.url = this.starship.url;
      this.films = this.starship.films;
    });
  }
}
