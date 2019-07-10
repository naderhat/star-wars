import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  constructor() {}

  created: Date;
  director: string;
  edited: Date;
  episodeId: number;
  openingCrawl: string;
  title: string;
  url: string;

  prodoucer: string;
  releaseDate: string;

  characters: string[];
  planets: string[];
  startships: string[];
  vehicles: string[];
  species: string[];

  ngOnInit() {}
}
