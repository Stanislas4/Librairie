import { Component } from '@angular/core';
import { LivreComponent } from './livre/livre.component'; // If you want to use LivreComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LivreComponent], // Import LivreComponent and services
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Your component logic goes here
}
