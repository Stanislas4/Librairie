// task.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../models/Task.model';
import { SubTask } from '../models/SubTask.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(taskName: string): void {
    const task = new Task(taskName);
    this.tasks.push(task);
  }

  addSubTask(taskIndex: number, subTaskName: string): void {
    const task = this.tasks[taskIndex];
    const subTask = new SubTask(subTaskName);
    task.subTask.push(subTask);
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  removeSubTask(taskIndex: number, subTaskIndex: number): void {
    const task = this.tasks[taskIndex];
    task.subTask.splice(subTaskIndex, 1);
  }
}
