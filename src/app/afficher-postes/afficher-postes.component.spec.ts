import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPostesComponent } from './afficher-postes.component';

describe('AfficherPostesComponent', () => {
  let component: AfficherPostesComponent;
  let fixture: ComponentFixture<AfficherPostesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPostesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
