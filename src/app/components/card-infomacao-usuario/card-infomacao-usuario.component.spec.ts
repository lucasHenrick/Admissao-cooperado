import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfomacaoUsuarioComponent } from './card-infomacao-usuario.component';

describe('CardInfomacaoUsuarioComponent', () => {
  let component: CardInfomacaoUsuarioComponent;
  let fixture: ComponentFixture<CardInfomacaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInfomacaoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfomacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
