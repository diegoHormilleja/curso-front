
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './components/men/men.component';
import { HomeComponent } from './components/home/home.component';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { WomenComponent } from './components/women/women.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutComponent } from './components/about/about.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { NegocioService } from './services/negocio.service';
import { LoginComponent } from './components/login/login.component';


const misRutas: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {path: 'men', component: MenComponent},
  {path: 'women', component: WomenComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detalle/:codigo', component: DetalleComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    HomeComponent,
    WomenComponent,
    ContactoComponent,
    AboutComponent,
    DetalleComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(misRutas),
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [NegocioService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
