import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.html',
  styleUrl: '../styles.css'
})
export class App {
  
  log(){
    console.log("click detecté");
  }
}
