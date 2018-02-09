import { Injectable } from '@angular/core';
import { ITodoType } from './interface/interface2';

@Injectable()
export class TodoDropdownService {

  todoType: ITodoType[] = [];

  /** Get the todo Type */
  getTodoType() {
    return this.todoType = [{
      id: 1,
      type: 'Learn Angular'
    },
    {
      id: 2,
      type: 'Learn React'
    }, 
    {
      id: 3,
      type: 'Learn MongoDB'
    }
    ];
  }


}
