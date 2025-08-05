import { Component, input, output } from '@angular/core';
import { Painting } from "./model/painting";

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css'
})
export class Buttons {

  images = input<Painting[]>();
  selectedImage = output<[Painting,Boolean]>();
  frameBooleean = true;

  newImageFunction() {
    if (this.images() && this.images()!.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.images()!.length);
      const newImage = this.images()![randomIndex];
      this.selectedImage.emit([newImage, this.frameBooleean]);
    }
  }

  newFrameFunction() {
    // Show a new frame
  }

  wholeImageFunction() {
    // Show the whole image
    this.frameBooleean = false;
  }

  answerFunction() {
    // Show the correct answer
  }

}
