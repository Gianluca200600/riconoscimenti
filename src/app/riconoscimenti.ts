import { Component, signal } from '@angular/core';
import { Buttons } from "./buttons";
import { Picture } from "./picture";
import { Answer } from "./answer";
import { Painting } from "./model/painting";
import { Bridge } from './bridge';

@Component({
  selector: 'app-riconoscimenti',
  imports: [Buttons, Picture, Answer, Bridge],
  templateUrl: './riconoscimenti.html',
  styleUrl: './riconoscimenti.css'
})
export class Riconoscimenti {

  imagesSignal = signal<Painting[] | undefined>(undefined);
  selectedImage: Painting | undefined;
  showAnswer: Boolean | undefined;

  onLoadUp(images: Painting[]) {
    this.imagesSignal.set(images);
  }

}
