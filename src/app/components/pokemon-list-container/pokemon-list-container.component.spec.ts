import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListContainerComponent } from './pokemon-list-container.component';

describe('PokemonListContainerComponent', () => {
  let component: PokemonListContainerComponent;
  let fixture: ComponentFixture<PokemonListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
