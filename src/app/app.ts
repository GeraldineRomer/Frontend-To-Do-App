import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksModule } from './tasks/tasks-module';
import { TaskListComponent } from "./tasks/pages/task-list/task-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('frontend');
}
