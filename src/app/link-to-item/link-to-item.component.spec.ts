import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToItemComponent } from './link-to-item.component';

describe('LinkToItemComponent', () => {
  let component: LinkToItemComponent;
  let fixture: ComponentFixture<LinkToItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkToItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkToItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
