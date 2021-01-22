import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerAddComponent } from './beer-add.component';

describe('BeerAddComponent', () => {
  let component: BeerAddComponent;
  let fixture: ComponentFixture<BeerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
