import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredActionsComponent } from './insured-actions.component';

describe('InsuredActionsComponent', () => {
  let component: InsuredActionsComponent;
  let fixture: ComponentFixture<InsuredActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuredActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuredActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
