import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasCardComponent } from './peliculas-card.component';

describe('PeliculasCardComponent', () => {
  let component: PeliculasCardComponent;
  let fixture: ComponentFixture<PeliculasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
