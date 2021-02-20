import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAbonneComponent } from './inscription-abonne.component';

describe('InscriptionAbonneComponent', () => {
  let component: InscriptionAbonneComponent;
  let fixture: ComponentFixture<InscriptionAbonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionAbonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
