import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Task } from '../models/Task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [FormsModule, DatePipe]
})
export class TaskListComponent {
  newTask: string = '';
  newSubTask: string = '';
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (!this.newTask.trim()) {
      alert('Task name cannot be empty');
      return;
    }
    const taskExists = this.tasks.some(task => task.nameTask.toLowerCase === this.newTask.trim().toLowerCase);
    if (!taskExists) {
      this.taskService.addTask(this.newTask.trim());
      this.tasks = this.taskService.getTasks();
      this.newTask = '';
    } else {
      alert('Task already exists');
    }
  }

  addSubTask(taskIndex: number) {
    const subTaskExists = this.tasks[taskIndex].subTask.some(subTask => subTask.subTaskName.toLowerCase === this.newSubTask.trim().toLowerCase);
    if (!this.newSubTask.trim()) {
      alert('SubTask name cannot be empty');
      return;
    }
    if (!subTaskExists) {
      this.taskService.addSubTask(taskIndex, this.newSubTask.trim());
      this.tasks = this.taskService.getTasks();
      this.newSubTask = '';
    } else {
      alert('SubTask already exists');
    }
  }

  removeTask(index: number) {
    this.taskService.removeTask(index);
    this.tasks = this.taskService.getTasks();
  }

  removeSubTask(taskIndex: number, subTaskIndex: number) {
    this.taskService.removeSubTask(taskIndex, subTaskIndex);
    this.tasks = this.taskService.getTasks();
  }
}
