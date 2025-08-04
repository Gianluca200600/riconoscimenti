import { Component } from '@angular/core';
import { Buttons } from "./buttons";
import { Picture } from "./picture";
import { Answer } from "./answer";

@Component({
  selector: 'app-riconoscimenti',
  imports: [Buttons, Picture, Answer],
  templateUrl: './riconoscimenti.html',
  styleUrl: './riconoscimenti.css'
})
export class Riconoscimenti {

}
