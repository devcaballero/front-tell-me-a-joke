import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundColor: string | undefined;
  joke: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRandomJoke(); // Llama a getRandomJoke al iniciar el componente
  }
  

  getRandomJoke() {
    this.http.get<any>('http://localhost:3000/random-joke').subscribe(data => {
      this.joke = data.joke;
      this.generateRandomBackgroundColor();
    });
  }

  generateRandomBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    this.backgroundColor = randomColor;
    document.body.style.backgroundColor = this.backgroundColor;
  }
  
}

