import { Component, input } from '@angular/core';
import { Painting } from "./model/painting";

@Component({
  selector: 'app-picture',
  imports: [],
  templateUrl: './picture.html',
  styleUrl: './picture.css'
})
export class Picture {
  image = input<[Painting, Boolean]>();
  img = new Image();
  size = 350;

  partialImage() {
    if (!this.image()) 
      return undefined;

    // Show only a random part of the image
    this.img.src = this.image()![0]!.url;
    const height = this.image()![0]!.height;
    const width = this.image()![0]!.width;

    console.log('Image dimensions:', width, height);

    const randomX = Math.floor(Math.random() * (width));
    const randomY = Math.floor(Math.random() * (height)); 
    console.log('Random position:', randomX, randomY);

    // Return a CSS background image with the random part
    // The image is centered and cropped to fit the size
    this.img.style.width = `${this.size}px`;
    this.img.style.height = `${this.size}px`;
    this.img.style.objectFit = 'cover';
    this.img.style.objectPosition = `-${randomX}px -${randomY}px`;
    this.img.style.borderRadius = '50%';

    return `url(${this.img.src}) no-repeat center center / cover`;
  }

}
