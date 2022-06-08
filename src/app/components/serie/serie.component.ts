import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Series } from 'src/app/models/serie-models';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css', '../../app.component.css'],
})
export class SerieComponent implements OnInit {
  public series$: Observable<Series[]>;
  // Observable pour 1 seul série
  public serie$!: Observable<Series>;
  public loading: boolean;

  constructor(private http: HttpClient) {
    this.loading = true;
    this.series$ = this.http.get<Series[]>('http://10.103.0.254:8000/series');
  }

  // constructor(private svc: SerieService) {
  //    this.series$ = this.svc.getSeries();
  //    this.serie$ = this.svc.getSaisons();
  //   this.loading = true;
  // }

  public afficherSaison(id: any) {
    this.serie$ = this.http.get<Series>(
      'http://10.103.0.254:8000/api/series/' + id + '.json'
    );
  }

  // public afficherSaison(id: any) {
  //   this.serie$ = this.http.get<Series>(
  //     'http://10.103.0.254:8000/api/series/' + id + '.json'
  //   );
  // }

  ngOnInit(): void {}
}
