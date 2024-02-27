import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'http://localhost:3000/games';

  // SEARCH
  getGames(title: any): Observable<any> {
    return this._http.get(`${this.apiUrl}/${title}`);
  }
}
