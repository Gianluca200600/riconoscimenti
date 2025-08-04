import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-answer',
  imports: [FontAwesomeModule],
  templateUrl: './answer.html',
  styleUrl: './answer.css'
})
export class Answer {
faPaperPlane = 'paper-plane';

  submitFunction() {
    throw new Error('Method not implemented.');
  }

}
