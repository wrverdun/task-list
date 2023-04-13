import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/task';
import { TASKS } from '../mock_tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task: task[] = TASKS;

  constructor (){}

  ngOnInit(): void {
    
  }

}
