import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { KeywordSearchComponent } from './component/keyword-search/keyword-search.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    DetailsPageComponent,
    MovieListComponent,
    KeywordSearchComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
