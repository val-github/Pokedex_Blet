import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PokemonsModule } from '../pokemons.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokId?: number;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(id: any){
    console.log(id);
    this.pokId = id;
  }

  onRetour(){
    this.pokId = undefined;
  }
}
