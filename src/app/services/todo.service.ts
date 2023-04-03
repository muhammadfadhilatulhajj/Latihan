import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  fav = [];
  todoList: Todo[] = [
  ];

  constructor(private deletePopup: ToastrService) {}

  deleteTodo(item) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);


  }

  addTodo(title) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: title,
    };
    this.todoList.unshift(item);
  }

  updateFav() {
    this.fav = JSON.parse(localStorage.getItem('favorite')?? '{}');
  }
}
