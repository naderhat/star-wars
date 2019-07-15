import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'src/app/star-wars.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicleUrl: string;
  subscription: Subscription;
  vehicle;

  constructor(
    private route: ActivatedRoute,
    private swService: StarWarsService
  ) {}

  name: string;
  model: string;
  manufacturer: string;
  costInCredits: number;
  length: number;
  maxAtmospheringSpeed: number;
  crew: number;
  passengers: number;
  cargoCapacity: number;
  consumables: string;
  vehicleClass: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;

  ngOnInit() {
    this.route.params.subscribe(params => (this.vehicleUrl = params.url));

    this.swService.fetchVehicleDetails(this.vehicleUrl);

    this.subscription = this.swService.vehicleFetched.subscribe(() => {
      this.vehicle = this.swService.getVehicle();

      this.name = this.vehicle.name;
      this.model = this.vehicle.model;
      this.manufacturer = this.vehicle.manufacturer;
      this.costInCredits = this.vehicle.costInCredits;
      this.length = this.vehicle.length;
      this.maxAtmospheringSpeed = this.vehicle.maxAtmospheringSpeed;
      this.crew = this.vehicle.crew;
      this.passengers = this.vehicle.passengers;
      this.cargoCapacity = this.vehicle.cargoCapacity;
      this.consumables = this.vehicle.consumables;
      this.vehicleClass = this.vehicle.vehicleClass;
      this.pilots = this.vehicle.pilots;
      this.films = this.vehicle.films;
      this.created = this.vehicle.created;
      this.edited = this.vehicle.edited;
      this.url = this.vehicle.url;
    });
  }
}
