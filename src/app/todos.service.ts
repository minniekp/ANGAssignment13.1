import { Injectable } from '@angular/core';
import { ITodoList } from './interface/interface1';
import { ITodoType } from './interface/interface2'; 

@Injectable()
export class TodosService {

  private todosList: ITodoList[] = [];

  /** Add todo in the array List. */
  addTodo(todosDetail: ITodoList) {
    this.todosList.unshift(todosDetail);
  };

  /**Get the todo list from the array. */
  getTodoList(): ITodoList[] {
    return this.todosList;
  };


}
