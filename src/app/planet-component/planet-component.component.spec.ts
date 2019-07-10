import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetComponentComponent } from './planet-component.component';

describe('PlanetComponentComponent', () => {
  let component: PlanetComponentComponent;
  let fixture: ComponentFixture<PlanetComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
