import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerListComponent } from '../app/beer-list/beer-list.component';
import { BeerInfoComponent } from './beer-info/beer-info.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
import { BeerAddComponent } from './beer-add/beer-add.component';

const routes: Routes = [
  { path: 'beers/info/:id', component: BeerInfoComponent },
  { path: 'beers/edit/:id', component: BeerEditComponent },
  { path: 'beers/add', component: BeerAddComponent },
  { path: 'beers', component: BeerListComponent },
  { path: '', redirectTo: '/beers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
