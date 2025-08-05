import { Component, input } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Painting } from "./model/painting";

@Component({
  selector: 'app-answer',
  imports: [FontAwesomeModule],
  templateUrl: './answer.html',
  styleUrl: './answer.css'
})
export class Answer {
  faPaperPlane = faPaperPlane;
  image = input<[Painting, Boolean]>();
  
  submitAnswer() {
    
  }

}
