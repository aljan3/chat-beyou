import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDirectiveComponent } from './ad-directive.component';

describe('AdDirectiveComponent', () => {
  let component: AdDirectiveComponent;
  let fixture: ComponentFixture<AdDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
