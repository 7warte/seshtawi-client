import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { provideHttpClient } from '@angular/common/http';

import { importProvidersFrom } from '@angular/core';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { LoadingSpinnerComponent } from "./components/ui/loading-spinner/loading-spinner.component";
@NgModule({
  declarations: [
    AppComponent,
    DocumentationComponent,
    NavbarComponent,
    HomepageComponent,
    ArticleFormComponent,
    ArticleComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent
],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
