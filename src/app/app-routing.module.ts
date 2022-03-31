import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokedexComponent } from './pokemons/pokedex/pokedex.component';
import { TeamComponent } from './pokemons/team/team.component';
import { ConnectionComponent } from './connection/connection.component';

const routes: Routes = [
  {path: 'pokemon/:id',
  component: PokemonDetailComponent},
  {path: 'pokemon',
  component: PokemonListComponent},
  {path: 'pokedex',
  component: PokedexComponent},
  {path: 'team',
  component: TeamComponent},
  {path: 'connection',
  component: ConnectionComponent},
  {path: '', redirectTo: '/pokedex', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
