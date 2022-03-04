import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SectionComponent } from './components/section/section.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { AboutComponent } from './components/about/about.component';
import { PersonalComponent } from './components/personal/personal.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SectionInputComponent } from './inputs/section-input/section-input.component';
import { AboutInputComponent } from './inputs/about-input/about-input.component';
import { LanguagesInputComponent } from './inputs/languages-input/languages-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    SectionComponent,
    LanguagesComponent,
    AboutComponent,
    PersonalComponent,
    MainpageComponent,
    LoginComponent,
    RegisterComponent,
    SectionInputComponent,
    AboutInputComponent,
    LanguagesInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
