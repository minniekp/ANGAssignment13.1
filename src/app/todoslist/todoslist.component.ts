import { Component, OnInit } from '@angular/core';
import { ITodoList } from '../interface/interface1';
import { TodosService } from '../todos.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.component.html',
  styleUrls: ['./todoslist.component.css']
})
export class TodoslistComponent implements OnInit {

  // todosDetail: ITodoList[];
  todosDetail: Observable<ITodoList[]>;

  /** Using constructor, call the todosService.
       this shorthand syntax automatically creates and
      initializes a new private member in the class */
  constructor(private todosService: TodosService) { }

  /**Get the todosDetail from todos-app  */
  private searchData: string;
  

  ngOnInit() {
    this.searchData = '';
    this.todosDetail = this.todosService.getTodoList();
  };
}
