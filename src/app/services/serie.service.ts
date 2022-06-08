import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Series } from '../models/serie-models';
import { Saison } from '../models/saison-models';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  public series$: Observable<Series[]>;
   public serie$!: Observable<Series>;

  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
    this.series$ = this._http.get<Series[]>(
      'http://10.103.0.254:8000/api/series.json'
    );
    
  }

  //construire les saisons selon l'id
  // this.serie$ = this._http.get<Series>(
  //   'http://10.103.0.254:8000/api/series/' + id + '.json'
  // );
  

  public getSeries(): Observable<Series[]> {
    return this.series$;
  }

 // public getSaisons(): Observable<Series> {
   // this.serie$ = this._http.get<Series>(
  //   'http://10.103.0.254:8000/api/series/' + id + '.json'
  // );
  }


