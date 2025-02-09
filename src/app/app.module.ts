import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { provideHttpClient } from '@angular/common/http';

import {MatTooltipModule} from '@angular/material/tooltip'; 

import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { LoadingSpinnerComponent } from "./components/ui/loading-spinner/loading-spinner.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutComponent } from './components/about/about.component';
import { DesignPageComponent } from './components/design-page/design-page.component';
@NgModule({
  declarations: [
    AppComponent,
    DocumentationComponent,
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    ArticleFormComponent,
    ArticleComponent,
    FooterComponent,
    CarouselComponent,
    DesignPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    MatTooltipModule
],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
