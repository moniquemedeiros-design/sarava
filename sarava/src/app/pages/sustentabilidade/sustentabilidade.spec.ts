import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sustentabilidade } from './sustentabilidade';

describe('Sustentabilidade', () => {
  let component: Sustentabilidade;
  let fixture: ComponentFixture<Sustentabilidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sustentabilidade],
    }).compileComponents();

    fixture = TestBed.createComponent(Sustentabilidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
