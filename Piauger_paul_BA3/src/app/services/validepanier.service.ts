import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, last, map } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class ValidepanierService {
  constructor(private http: HttpClient) {}

  private apiRoute: any = {
    user: 'https://www.eleguen.ovh/api/v1/purchase',
  };

  public submitPanier(
    lastname: string,
    firstname: string,
    adress: string,
    zipcode: string,
    city: string,
    card: string,
    cardDate: string
  ): Observable<IUser> {
    return this.http
      .post(this.apiRoute.user, {
        lastname,
        firstname,
        adress,
        zipcode,
        city,
        card,
        cardDate,
      })
      .pipe(map((data: any) => data as IUser));
  }
  //je travaillé ici ca marche pas mais timeout
}
