import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-answer',
  imports: [FontAwesomeModule],
  templateUrl: './answer.html',
  styleUrl: './answer.css'
})
export class Answer {
faPaperPlane = faPaperPlane;

  submitAnswer() {
    throw new Error('Method not implemented.');
  }

}
