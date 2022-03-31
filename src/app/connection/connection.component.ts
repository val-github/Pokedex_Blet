import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable, tap } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { User } from '../pokemons/modeles/user';
import { PokemonService } from '../pokemons/pokemon.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  datastruct?: any;
  access_token?: String;
  compoEquipe?: Array<number>;
  equipe?: Observable<Array<number>>;

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required,Validators.email],
    password: ['', Validators.required]
  });
  isSubmitted = false;

  constructor(private pokemonService: PokemonService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.compoEquipe = [];
  }

  get formControls(){return this.loginForm.controls}

  @Output() output = new EventEmitter<String>();

  connection(){
    this.isSubmitted = true;
    if(this.loginForm.invalid||this.loginForm==null){
      return;
    }
    let mdp: String;
    let mail: String;

    mdp = this.loginForm.get('password')?.value;
    mail = this.loginForm.get('email')?.value;

    //this.pokemonService.Authconnexion("testVal@test.fr", "jjjjjj").subscribe(data => {
    this.pokemonService.Authconnexion(mail, mdp).subscribe(data => {

      this.datastruct = data;
      this.access_token = this.datastruct!.access_token;

      this.pokemonService.compoEquipe = this.equipe;

      this.pokemonService.access_token = this.access_token;

      this.router.navigateByUrl('/team'); // route indiquée dans app-routing
     })
  }

  goBack(){
    this.router.navigateByUrl('/pokedex');
  }

  getErrorMessage() {
    return 'email invalide';
  }
}
