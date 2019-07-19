import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from 'src/app/pagination';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input()
  page: Page<any>;

  @Output()
  pageChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
