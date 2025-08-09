import { Component, inject, output } from '@angular/core';
import { Painting } from "./model/painting";
import { Observable } from 'rxjs';
import { ConnectionService } from './model/connection-service';

@Component({
  selector: 'app-bridge',
  standalone: true,
  imports: [],
  templateUrl: './bridge.html',
  styleUrl: './bridge.css'
})
export class Bridge {

  connectionService: ConnectionService = inject(ConnectionService);
  imagesOutput = output<Painting[]>();
  images$: Observable<Painting[]> = this.connectionService.getImages();

  ngOnInit(): void {
    this.onCreation();
  }

  onCreation() {
    this.images$.subscribe(
      data => {
        this.imagesOutput.emit(data);
      }
    )
  }

}
