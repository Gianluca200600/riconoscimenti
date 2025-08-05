import { Injectable } from '@angular/core';
import { Painting } from './painting';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private images = require('../../../public/images.json');

  getImages(): Observable<Painting[]> {
    return of(this.images);
  }

}
