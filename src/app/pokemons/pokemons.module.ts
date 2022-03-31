import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { TeamComponent } from './team/team.component';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    AppRoutingModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokedexComponent,
    TeamComponent
  ]
})
export class PokemonsModule { }
