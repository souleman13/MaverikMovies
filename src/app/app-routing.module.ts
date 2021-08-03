import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';
const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'details/:id', component: DetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
