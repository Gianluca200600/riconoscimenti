import { Component, input } from '@angular/core';
import { Painting } from "./model/painting";

@Component({
  selector: 'app-picture',
  imports: [],
  templateUrl: './picture.html',
  styleUrl: './picture.css'
})
export class Picture {

  image = input<Painting>();
  img = new Painting();

}
