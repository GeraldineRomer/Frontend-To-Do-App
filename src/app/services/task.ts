import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
  id_tarea: number;
  titulo: string;
  descripcion?: string;
  completado: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl = 'http://localhost:8000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
