import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosCardComponent } from './documentos-card.component';

describe('DocumentosCardComponent', () => {
  let component: DocumentosCardComponent;
  let fixture: ComponentFixture<DocumentosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
