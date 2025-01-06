import { Component } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component"; // If you want to use LivreComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent], // Import LivreComponent and services
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Your component logic goes here
}
