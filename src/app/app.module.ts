import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http' ; 
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoslistComponent } from './todoslist/todoslist.component';
import { TaskdetalComponent } from './taskdetal/taskdetal.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyUpperCasePipe } from './my-upper-case.pipe';
import { FilterTodosPipe } from './filter-todos.pipe';
import { TodosService } from './todos.service';
import { TodoDropdownService } from './todo-dropdown.service';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full'},
  { path: 'todos', component: TodosComponent },
  { path: 'todosList', component: TodoslistComponent },
  { path: 'taskDetal/:id', component: TaskdetalComponent },
  { path: '**', component: PagenotfoundComponent }
  
];



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoslistComponent,
    TaskdetalComponent,
    PagenotfoundComponent,
    MyUpperCasePipe,
    FilterTodosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [TodoDropdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
