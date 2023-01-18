import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativoContaComponent } from './informativo-conta.component';

describe('InformativoContaComponent', () => {
  let component: InformativoContaComponent;
  let fixture: ComponentFixture<InformativoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformativoContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
