import { Component, input, signal } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPaperPlane, faX } from "@fortawesome/free-solid-svg-icons";
import { Painting } from "./model/painting";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './answer.html',
  styleUrls: ['./answer.css']
})
export class Answer {

  faPaperPlane = faPaperPlane;
  faX = faX;

  image = input<Painting>();
  score = signal(0);

  form = new FormControl('');
  bool = false;
  windowBool = false;
  highlightScore = false;

  private normalize(s?: string | null) {
    return (s ?? '').toString().replace(/\s*\(.*?\)\s*/g, '').trim().toLowerCase();
  }

  checkAnswer(answerInput: string | null): [boolean, number] {

    const answer = this.normalize(answerInput);
    const title = this.normalize(this.image()?.title);
    const artist = this.normalize(this.image()?.artist);
    let value = 0;

    if (!answer) return [false, 0];

    if (artist.includes("&")) {
      const artists = artist.split("&").map(a => a.trim());
      if (artists.includes(answer)) {
        value = 1;
      } else if (artists.some(a => answer.includes(a) && a !== answer)) {
        value = 0.5;
      }
    }
    else {
      if ((title.includes(answer) && title !== answer) ||
        (artist.includes(answer) && artist !== answer)) {
        value = 0.5;
      }
      if (title === answer || artist === answer) {
        value = 1;
      }
    }

    return [value > 0, value];
  }

  onSubmit() {
    const [isCorrect, value] = this.checkAnswer(this.form.value);

    this.bool = isCorrect;
    if (isCorrect) {
      this.score.update(s => s + value);
      this.highlightScore = true;

      setTimeout(() => {
        this.highlightScore = false;
      }, 1000);
    }

    this.windowBool = true;
  }

  closeWindow() {
    this.windowBool = false;
  }

}

