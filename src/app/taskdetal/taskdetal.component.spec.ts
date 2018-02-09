import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdetalComponent } from './taskdetal.component';

describe('TaskdetalComponent', () => {
  let component: TaskdetalComponent;
  let fixture: ComponentFixture<TaskdetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskdetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskdetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
