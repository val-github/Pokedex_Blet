import { Component, OnInit, OnChanges, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from '../modeles/pokemon';
import { PokemonService } from '../pokemon.service';
import { ConnectionComponent } from 'src/app/connection/connection.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, tap } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  pokIdAff?: number;

  pokId1?: number = undefined;
  pok1?: Pokemon = undefined;
  pokId2?: number;
  pok2?: Pokemon;
  pokId3?: number;
  pok3?: Pokemon;
  pokId4?: number;
  pok4?: Pokemon;
  pokId5?: number;
  pok5?: Pokemon;
  pokId6?: number;
  pok6?: Pokemon;
  private compoEquipe?: Array<number>;
  private equipe?: Observable<Array<number>>;

  access_token?: String;

  constructor(private router:Router,
              private pokemonService: PokemonService,
              private http: HttpClient,
              ) {
                this.access_token = this.pokemonService.access_token;

                let headers = new HttpHeaders({
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.access_token}`,
                });

                this.compoEquipe = [];


                let options = { headers: headers };
                const url = `${this.pokemonService.baseUrl}/trainers/me/team`;

                this.http.get<number[]>(url, options).subscribe(
                  data => {
                    this.compoEquipe = data;
                    this.ajoutEquipe(this.compoEquipe[0], 1);
                    this.ajoutEquipe(this.compoEquipe[1], 2);
                    this.ajoutEquipe(this.compoEquipe[2], 3);
                    this.ajoutEquipe(this.compoEquipe[3], 4);
                    this.ajoutEquipe(this.compoEquipe[4], 5);
                    this.ajoutEquipe(this.compoEquipe[5], 6);
                  }
                );


              }

  ngOnInit(): void {
    this.access_token = this.pokemonService.access_token;
  }

  onChange(id: any){
    this.pokIdAff = id;
  }

  goBack(){
    this.router.navigateByUrl("/pokedex");
  }

  onRetour(){
    this.pokIdAff = undefined;
  }

  ajoutEquipe(id?: number, empl?: number){
    if (id == undefined || id == 0) {
      if (empl == 1){
        this.pokId1 = 0;
        this.pok1 = undefined;
      }

      if (empl == 2){
        this.pokId2 = 0;
        this.pok2 = undefined;
      }

      if (empl == 3){
        this.pokId3 = 0;
        this.pok3 = undefined;
      }

      if (empl == 4){
        this.pokId4 = 0;
        this.pok4 = undefined;
      }

      if (empl == 5){
        this.pokId5 = 0;
        this.pok5 = undefined;
      }

      if (empl == 6){
        this.pokId6 = 0;
        this.pok6 = undefined;
      }

      return;
    }else{
      if (empl == 1){
        this.pokId1 = id;
        this.pokemonService.getPokemon(id).subscribe(
          data => {this.pok1 = data}
        )
      }

      if (empl == 2){
        this.pokId2 = id;
        this.pokemonService.getPokemon(id).subscribe(
          data => {this.pok2 = data}
        )
      }

      if (empl == 3){
        this.pokId3 = id;
        this.pokemonService.getPokemon(id).subscribe(
          data => {this.pok3 = data}
        )
      }

      if (empl == 4){
        this.pokId4 = id;
        this.pokemonService.getPokemon(id).subscribe(
          data => {this.pok4 = data}
        )
      }

      if (empl == 5){
        this.pokId5 = id;
        this.pokemonService.getPokemon(id).subscribe(
          data => {this.pok5 = data}
        )
      }

      if (empl == 6){
        this.pokId6 = id;
        this.pokemonService.getPokemon(id).subscribe(
          data => {this.pok6 = data}
        )
      }
    }
  }

  supprEquipe(id?: number, empl?: number){
    if (id == undefined) return;

    if (empl == 1){
      this.pokId1 = 0;
      this.pokemonService.getPokemon(id).subscribe(
        data => {this.pok1 = undefined}
      )
    }

    if (empl == 2){
      this.pokId2 = 0;
      this.pokemonService.getPokemon(id).subscribe(
        data => {this.pok2 = undefined}
      )
    }

    if (empl == 3){
      this.pokId3 = 0;
      this.pokemonService.getPokemon(id).subscribe(
        data => {this.pok3 = undefined}
      )
    }

    if (empl == 4){
      this.pokId4 = 0;
      this.pokemonService.getPokemon(id).subscribe(
        data => {this.pok4 = undefined}
      )
    }

    if (empl == 5){
      this.pokId5 = 0;
      this.pokemonService.getPokemon(id).subscribe(
        data => {this.pok5 = undefined}
      )
    }

    if (empl == 6){
      this.pokId6 = 0;
      this.pokemonService.getPokemon(id).subscribe(
        data => {this.pok6 = undefined}
      )
    }
  }

  //@Output() output = new EventEmitter<Array<number>>();

  //envoyer compoTeam a 'connection'
  public envoyerEquipe(){

    this.compoEquipe = []
    // struct pour eviter d envoyer un array avec des 0
    if (this.pokId1!=undefined) this.compoEquipe?.push(this.pokId1);
    if (this.pokId2!=undefined) this.compoEquipe?.push(this.pokId2);
    if (this.pokId3!=undefined) this.compoEquipe?.push(this.pokId3);
    if (this.pokId4!=undefined) this.compoEquipe?.push(this.pokId4);
    if (this.pokId5!=undefined) this.compoEquipe?.push(this.pokId5);
    if (this.pokId6!=undefined) this.compoEquipe?.push(this.pokId6);

    //this.output.emit(this.compoEquipe);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.access_token}`,
    });

    let options = { headers: headers };
    const url = `${this.pokemonService.baseUrl}/trainers/me/team`;
    this.http.put(url, this.compoEquipe, options).subscribe(
      data => {
        this.http.get<number[]>(url, options).pipe(
          tap(data => {
          })
        );
      }
    );



    return;
  }


}
