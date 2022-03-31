import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../modeles/pokemon';

import { MatCardModule } from '@angular/material/card';
import { Location } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  info?: Pokemon;
  @Input() pokIdInput?: number;

  constructor(private route: ActivatedRoute,
    private pokSer: PokemonService,
    private location: Location
    ) { }

  getPokemon(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokSer.getPokemon(id).subscribe(
      data => {this.info = data}
    )
  }

  playAudio(id: String | undefined){
    let audio = new Audio();
    audio.src = "assets/audio/"+id+".mp3";
    audio.load();
    audio.play();
  }

  back(): void {
    this.location.back();
  }

  ngOnChanges(): void{
    if(this.pokIdInput){
      this.onChanges(this.pokIdInput);
    }
  }

  onChanges(id: any): void{
    this.pokSer.getPokemon(id).subscribe(
      data => {this.info = data}
    )
  }

  @Output() retour = new EventEmitter();

  goBack(): void{
    this.retour.emit();
  }
}
