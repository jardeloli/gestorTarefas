import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Task } from '../models/task';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor(){ }

  private tasks: Array<Task> = [];
  
  data = new Date()

  getTask(): Array<Task>{

     if (this.tasks.length === 0) {
       this.tasks = this.getFromLocalStorage();
      }
      return this.tasks;
  }

  getById(id: number): Task | undefined{

    const task = this.tasks.find(c => c.id === id)

    return task

  }


  addTask(task: Task){

    task.id = this.tasks.length + 1
    this.tasks.push(task);
    this.saveToLocalStorage();

  }

 

  updateTask(){

    this.saveToLocalStorage();
  }

  removeTask(task: Task){
    
    const index = this.tasks.indexOf(task)

    if(index !== -1){
      this.tasks.splice(index, 1);

      this.saveToLocalStorage();
    }

    
  }


  private saveToLocalStorage(){

      if (typeof window !== 'undefined' && localStorage) {
        const tasksJSON = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJSON);
      }
  }

  private getFromLocalStorage(): Array<Task>{
    if (typeof window !== 'undefined' && localStorage) {
      const tasksJSON = localStorage.getItem('tasks');

      if (tasksJSON) {
        return JSON.parse(tasksJSON) as Array<Task>;
      }

      
    }

    // Caso esteja rodando no SSR, devolve array vazio
    return this.tasks;

  }
}
