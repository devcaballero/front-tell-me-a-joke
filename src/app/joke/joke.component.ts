import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  joke: string = '';

  constructor(private http: HttpClient, private el: ElementRef) {}

  getRandomJoke() {
    this.http.get<any>('http://localhost:3000/random-joke').subscribe(data => {
      this.joke = data.joke;
      this.changeBackgroundColor();
    });
  }

  changeBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    this.el.nativeElement.querySelector('.joke-container').style.backgroundColor = randomColor;
  }
}
