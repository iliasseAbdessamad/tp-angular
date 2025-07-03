import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Home } from "./components/home/home";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Home
  ],
  templateUrl: './app.html'
})
export class App {
  protected appWelcomeMesage: String = "Welcome dear user, it's nice to meet you !"
}
