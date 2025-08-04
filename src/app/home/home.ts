import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConnectionService } from '../model/connection-service';
import { Image } from '../model/image';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  connectionService: ConnectionService = inject(ConnectionService);
  images: Image[] = [];

  constructor() {
    this.images = this.connectionService.importData();
  }

}
