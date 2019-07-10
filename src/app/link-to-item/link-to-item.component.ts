import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-to-item',
  templateUrl: './link-to-item.component.html',
  styleUrls: ['./link-to-item.component.css']
})
export class LinkToItemComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  urlPath: string;

  @Input()
  routerPath: string;

  constructor() {}

  ngOnInit() {}
}
