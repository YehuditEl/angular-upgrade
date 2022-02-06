import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimMainComponent } from './claim-main.component';

describe('ClaimMainComponent', () => {
  let component: ClaimMainComponent;
  let fixture: ComponentFixture<ClaimMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
