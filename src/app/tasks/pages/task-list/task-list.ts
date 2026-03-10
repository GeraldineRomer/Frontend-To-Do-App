import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../../../services/task';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {Observable, map} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
            CommonModule,
            MatIconModule,
            MatInputModule,
            MatFormFieldModule,
            FormsModule,
            MatButtonModule,
            MatTabsModule,
            AsyncPipe
          ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})

export class TaskListComponent implements OnInit {

  tasks$!: Observable<Task[]>;
  allTasks$!: Observable<Task[]>;
  activateTasks$!: Observable<Task[]>;
  completedTasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    /* Una sola llamada al backend */
    this.tasks$ = this.taskService.getTasks();
    this.allTasks$ = this.tasks$;
    this.activateTasks$ = this.tasks$.pipe(
      map(tasks => tasks.filter(task => !task.completado))
    );
    this.completedTasks$ = this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.completado))
    );
    /* this.taskService.getTasks().subscribe({
      next: data => this.tasks = data,
      error: err => console.error(err)
    }); */
  }
}
