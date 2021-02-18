import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDetailsOfPlaceInterface } from '../static/type';
import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsOfPlaceService {
  constructor(private http: HttpClient, private apiUrlService: ApiUrlService) {
  }

  public getDetailsOfPlace(placeId: string): Observable<IDetailsOfPlaceInterface> {
    const params = {
      id: placeId
    };
    return this.http.get<IDetailsOfPlaceInterface>(this.apiUrlService.generateApiLink('places'), {params});
  }
}