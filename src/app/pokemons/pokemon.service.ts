import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { tap, of } from 'rxjs';

import { PagedData } from './modeles/pagedData';
import { Pokemon } from './modeles/pokemon';
import { User } from './modeles/user';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';

  datastruct?: any;
  access_token?: String = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbGEyLXBva2VkZXgiLCJhdWQiOiJsYTItcG9rZWRleCIsImF1dGhfdGltZSI6MTY0ODM3NDA0MCwidXNlcl9pZCI6IkdYUHN2WlEweUlha2hFYlVlMkI5WTlEcU5BcTEiLCJzdWIiOiJHWFBzdlpRMHlJYWtoRWJVZTJCOVk5RHFOQXExIiwiaWF0IjoxNjQ4Mzc0MDQwLCJleHAiOjE2NDgzNzc2NDAsImVtYWlsIjoidGVzdHZhbEB0ZXN0LmZyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3R2YWxAdGVzdC5mciJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kacCLR88DOv1IKtrXHhTnaCnsOT-jnSCWXk8o1XmqfXLnyNYRFMBg8Mkta3Mu-2ZnwBqnJrfQfKjkQJZlceqadocOMYksn4rZrZbIBVH3PmGdNW7izOwI7H76oN_QGJ01CtQBNraA6QOVeHHnl6Eh_rD0wauMhAdWOZt6t2BNRb7MVNB6nj3vm4XWhV4-EEDTTFyMRvrjrjMxJC8bjPRV0SUMtDsXjc-UbLjZgBbsi3_xEn4ZprlLq9InmZGPibfm-VY-3IimLox22ZkbWRDWfH5Gq0SMQ11TBZf5GlzXwgDIASY0RrLca4tUoLB2D2pVj5qedw4xPP6SETTdelheA";
  compoEquipe?: Observable<Array<number>>;

  constructor(private http: HttpClient) { }

  getPokemons() {
    const url = `${this.baseUrl}/pokemons?offset=0&limit=20`;
    return this.http.get<PagedData<Pokemon>>(url);
  }

  getPokemon(id: number): Observable<Pokemon>{
    const url = `${this.baseUrl}/pokemons/${id}`;
    return this.http.get<Pokemon>(url);
  }

  getPokemonScroll(offset: Number, limit: number): Observable<PagedData<Pokemon>>{
    const url = `${this.baseUrl}/pokemons?offset=${offset}&limit=${limit}`;
    return this.http.get<PagedData<Pokemon>>(url);
  }

  getPokemonSearch(search: string) :Observable<PagedData<Pokemon>>{
    const url = `${this.baseUrl}/pokemons?search=${search}`;
    return this.http.get<PagedData<Pokemon>>(url);
  }

  // accorde un access_token ie la connection
  public connection(info: User): String{
    return "access_token";
  }

  // renvoit true si l'utilisateur est connecté
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  // déconnecte l'utilisateur en retirant l'access_token
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  // ouvre la fenêtre de connection
  public demandeConnection(){

  }

  Authconnexion(mail: String, mdp: String) : Observable<any> {
    const connexUrl = `${this.baseUrl}/auth/login`;
    console.log(mail + " " + mdp);

    return this.http.post(connexUrl, {
      email : mail as unknown as String,
      password : mdp as unknown as String,
    }).pipe(tap(data => {
          this.datastruct = data;
          this.access_token = this.datastruct!.access_token;
      }));
    }

    getAccessToken(): String {
      return "";
      //return this.access_token;
    }
}
