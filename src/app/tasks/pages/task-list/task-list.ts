import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../../../services/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html'
})

export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: data => this.tasks = data,
      error: err => console.error(err)
    });
  }
}
