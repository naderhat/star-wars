import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'src/app/star-wars.service';

@Component({
  selector: 'app-planet-component',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planetUrl: string;
  subscription: Subscription;
  planet;

  constructor(
    private route: ActivatedRoute,
    private swService: StarWarsService
  ) {}

  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  url: string;
  created: Date;
  edited: Date;

  ngOnInit() {
    this.route.params.subscribe(params => (this.planetUrl = params.url));

    this.swService.fetchPlanetDetails(this.planetUrl);

    this.subscription = this.swService.planetFetched.subscribe(() => {
      this.planet = this.swService.getPlanet();
      this.name = this.planet.name;
      this.rotation_period = this.planet.rotation_period;
      this.orbital_period = this.planet.orbital_period;
      this.diameter = this.planet.diameter;
      this.climate = this.planet.cliamte;
      this.gravity = this.planet.gravity;
      this.terrain = this.planet.terrain;
      this.surface_water = this.planet.surface_water;
      this.population = this.planet.population;
      this.residents = this.planet.residents;
      this.films = this.planet.films;
      this.created = this.planet.created;
      this.edited = this.planet.edited;
      this.url = this.planet.url;
    });
  }
}
