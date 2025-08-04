import { Component } from '@angular/core';
import { Image } from "./model/image";

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css'
})
export class Buttons {

  picture: Image;
  pictures: Image[] = [];

  constructor() {
    this.picture = new Image();
    this.pictures.push(this.picture);
  }

  // Methods to handle button clicks
  newImageFunction() {
    // Show a new image

  }
  newFrameFunction() {
    // Show a new frame
  }
  wholeImageFunction() {
    // Show the whole image
  }
  answerFunction() {
    // Show the correct answer
  }

}
