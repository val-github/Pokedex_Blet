import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { subscribeOn, tap } from 'rxjs';
import { PagedData } from '../modeles/pagedData';

import { Pokemon } from '../modeles/pokemon';
import { PokemonService } from '../pokemon.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {

  listePokemons?: PagedData<Pokemon>;
  search?: string;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  // V2
  public getPokemon(){
    this.pokemonService.getPokemons().subscribe(
        pokemon => {
          this.listePokemons = pokemon;
        })
  }

  public getPokemonOnScroll(offset: number, limit: number){
    this.pokemonService.getPokemonScroll(offset, limit).subscribe(
      pokemon => {
        this.listePokemons!.data = this.listePokemons!.data.concat(pokemon.data);
        this.listePokemons!.offset = pokemon.offset;
      })
  }

  onScroll(){
    return this.getPokemonOnScroll(this.listePokemons!.offset + this.listePokemons!.limit , this.listePokemons!.limit);
  }

  @Output() outputId = new EventEmitter<string>();

  public selectPokemon(id: string){
    this.outputId.emit(id);
  }

  public getPokemonSearch(search: any){
    if(search==""){
      console.log("yo");
      this.getPokemon();
    }else{
      this.pokemonService.getPokemonSearch(search).subscribe(
        pokemon => {this.listePokemons = pokemon;}
      )
    }
  }
}
