import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/star-wars.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  filmUrl: string;
  subscription: Subscription;
  film;

  constructor(
    private route: ActivatedRoute,
    private swService: StarWarsService
  ) {}

  created: Date;
  director: string;
  edited: Date;
  episodeId: number;
  openingCrawl: string;
  title: string;
  url: string;
  producer: string;
  releaseDate: string;

  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];

  ngOnInit() {
    this.route.params.subscribe(params => (this.filmUrl = params.url));

    this.swService.fetchFilmDetails(this.filmUrl);

    this.subscription = this.swService.filmFetched.subscribe(() => {
      this.film = this.swService.getFilm();

      this.created = this.film.created;
      this.director = this.film.director;
      this.edited = this.film.edited;
      this.episodeId = this.film.episodeId;
      this.openingCrawl = this.film.openingCrawl.replace(/\n/g, ' ');
      this.title = this.film.title;
      this.url = this.film.url;
      this.producer = this.film.producer;
      this.releaseDate = this.film.releaseDate;
      this.characters = this.film.characters;
      this.planets = this.film.planets;
      this.starships = this.film.starships;
      this.vehicles = this.film.vehicles;
      this.species = this.film.species;
    });
  }
}
