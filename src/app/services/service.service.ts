import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const API_URL = "https://api.jikan.moe/v4";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _http = inject(HttpClient);

  constructor() { }

  getTopAnimes() {
    return this._http.get(`${API_URL}/top/anime`);
  }

  getTopCharacters() {
    return this._http.get(`${API_URL}/top/characters`);
  }
}
