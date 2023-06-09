import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
      
  }

  toggleCompleted(todo: Todo) {
    this.todoService.updateTodo(todo.id, { completed:!todo.completed });
  }
}
