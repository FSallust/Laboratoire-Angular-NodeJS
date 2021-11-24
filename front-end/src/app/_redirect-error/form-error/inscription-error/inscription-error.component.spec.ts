import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionErrorComponent } from './inscription-error.component';

describe('InscriptionErrorComponent', () => {
  let component: InscriptionErrorComponent;
  let fixture: ComponentFixture<InscriptionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
