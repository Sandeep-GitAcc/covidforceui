import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaBankComponent } from './plasma-bank.component';

describe('PlasmaBankComponent', () => {
  let component: PlasmaBankComponent;
  let fixture: ComponentFixture<PlasmaBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasmaBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
