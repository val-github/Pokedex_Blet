import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonGuard implements CanActivate {
  constructor(private pokemonService: PokemonService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.pokemonService.estConnecte();
  }

}
