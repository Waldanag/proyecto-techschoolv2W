import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokeComponent } from './modal-poke.component';

describe('ModalPokeComponent', () => {
  let component: ModalPokeComponent;
  let fixture: ComponentFixture<ModalPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPokeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
