import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodosService } from '../todos.service';
import { TodoDropdownService } from '../todo-dropdown.service';
import { ITodoList } from '../interface/interface1';
import { ITodoType } from '../interface/interface2';
import { Router } from '@angular/router';
import { CommonFunction } from '../common';
import { MyUpperCasePipe } from '../my-upper-case.pipe';
import { FilterTodosPipe } from '../filter-todos.pipe';

declare const alertify: any;

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TodosComponent implements OnInit {

  /**Public variable */
  todosArray: ITodoList[] = [];
  todoType: ITodoType[] = [];

  private searchData: string;
  todosModel: ITodoList;
  todosDetail: ITodoList;

  /** Using constructor, call the todoService.
     this shorthand syntax automatically creates and
    initializes a new private member in the class */
  constructor(private todoService: TodosService, private todoDropDown: TodoDropdownService, private router: Router) { }

  ngOnInit() {
    this.todoModel();
    this.todoType = this.todoDropDown.getTodoType();
  }

  todoModel() {
    /**Define default values */
    return this.todosModel = {
      firstName: '',
      lastName: '',
      todoType: '',
      dob: new CommonFunction().getCurrentDate()
    };
  };

  /**Add a Todo */
  addTodo(values) {
    this.todosDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      todoType: values.todoType,
      dob: values.dob
    };

    /**Call function from service. */
    this.todoService.addTodo(this.todosDetail);

    /**Using 3rd party library to show message. */
    alertify.notify('Cricketer Added Successfully', 'success', 3);

    /**Redirecting page to todosList */
    this.router.navigate(['/todoslist']);
  };

}



