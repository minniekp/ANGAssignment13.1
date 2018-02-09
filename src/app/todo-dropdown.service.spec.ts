import { TestBed, inject } from '@angular/core/testing';

import { TodoDropdownService } from './todo-dropdown.service';

describe('TodoDropdownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDropdownService]
    });
  });

  it('should be created', inject([TodoDropdownService], (service: TodoDropdownService) => {
    expect(service).toBeTruthy();
  }));
});
