import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from '../service/task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css'
})
export class TaskDetails {

  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService){}

  task?: Task;

  ngOnInit(){

    let id = this.route.snapshot.paramMap.get('id');

    if (id === null) {
      this.navigateBack();
    }

    else{
      this.task = this.taskService.getById(+id);
      //+id converte de número para string

      if (this.task === undefined) {
        this.navigateBack();
      }

      if(!this.task?.criarData){
        this.task!.criarData = new Date();
      }

    }
    
  }

  save(){
    this.taskService.updateTask();

    this.navigateBack();

  }

  cancel(){
    this.navigateBack();
  }

  private navigateBack(){

    this.router.navigate(['/taskList'], { relativeTo: this.route})


  }

}
