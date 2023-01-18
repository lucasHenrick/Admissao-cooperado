import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteepsComponent } from './steeps.component';

describe('SteepsComponent', () => {
  let component: SteepsComponent;
  let fixture: ComponentFixture<SteepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
