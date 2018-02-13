import { Injectable } from '@angular/core';
import { ITodoList } from './interface/interface1';
import { ITodoType } from './interface/interface2'; 
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {

  private url: string = "http://localhost:3000/api/";

  constructor(private _http: Http) { }

  private todosList: ITodoList[] = [];

  /** Add todo in the array List. */
  addTodo(todosDetail: ITodoList) {
    this.todosList.unshift(todosDetail);
  };

  /**Get the todo list from the array. */
  getTodoList(): Observable<ITodoList[]> {
    return this._http.get(`${this.url}getTodos`)
      .map(this.extractData)
      .catch(this.handleErrors)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  };

  private handleErrors(error: Response) {
    return Observable.throw(error);
  };


}
