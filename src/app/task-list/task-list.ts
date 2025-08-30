import { Component, NgModule } from '@angular/core';
import { TaskFilter } from "../task-filter/task-filter";
import { TaskService } from '../service/task';
import { Task } from '../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [TaskFilter, CommonModule, FormsModule, RouterModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

    constructor(private taskService: TaskService){}

    tasks: Array<Task> = []; // Para manipular com o html

    newTask = new Task() 
    ngOnInit(){
      //quando esse componete carregar na tela, vai bater na taskService buscar o getTask
        this.tasks = this.taskService.getTask();

    }

    addTask(){
      this.taskService.addTask(this.newTask);
      //adiciona a task

      this.newTask = new Task();
      // limpa o campo pra ser digitado uma nova task
    }

    removeTask(task:Task){
      this.taskService.removeTask(task)
    }

    updateTask(){
      this.taskService.updateTask();
    }

    filterTasks(filter: string) {
      //usado no pesquisar
      if (filter !== ''){
          this.tasks = this.tasks.filter(c => c.name.includes(filter))
          // includes busca os caracteres digitados 

      }

      else{
          this.tasks = this.taskService.getTask();
      }
    }
}
