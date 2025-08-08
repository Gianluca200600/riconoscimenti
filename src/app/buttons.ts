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
  selectedImage = output<Painting>();
  seeAnswer = output<Boolean>();

  newImageFunction() {
    if (this.images() && this.images()!.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.images()!.length);
      const newImage = this.images()![randomIndex];
      this.selectedImage.emit(newImage);
    }
  }

  answerFunction() {
    this.seeAnswer.emit(true);
  }

}
