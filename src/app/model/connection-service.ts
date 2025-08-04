import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  importData() {
    // Import data from images.json
    var images = require('../../../public/images.json');
    return images;
  }

}
