import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SharedsModule } from './shareds/shareds/shareds.module';
import { HeaderComponent } from './pages/header/header.component';
import { ConsultaCpfComponent } from './components/consulta-cpf/consulta-cpf.component';
import { InformativoContaComponent } from './pages/informativo-conta/informativo-conta.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardInfomacaoUsuarioComponent } from './components/card-infomacao-usuario/card-infomacao-usuario.component';
import { SteepsComponent } from './components/steeps/steeps.component';
import { DocumentosCardComponent } from './components/documentos-card/documentos-card.component';
import { DadosCadastraisComponent } from './components/formulario/dados-cadastrais/dados-cadastrais.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    FooterComponent,
    HeaderComponent,
    ConsultaCpfComponent,
    InformativoContaComponent,
    InicioComponent,
    CardInfomacaoUsuarioComponent,
    SteepsComponent,
    DocumentosCardComponent,
    DadosCadastraisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
