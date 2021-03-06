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
import { LoginComponent } from './login/login.component';
import { AuthGuardComponent } from './auth-guard';
import { DeactivateGuardService } from './deactivate-guard';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'todos', component: TodosComponent, canActivate: [AuthGuardComponent],
    data: {
      message: 'Add a Todo'
    },
    resolve: { todoType : TodoTypeResolveService }
  },
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
    FilterTodosPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [TodoDropdownService, AuthGuardComponent, DeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
