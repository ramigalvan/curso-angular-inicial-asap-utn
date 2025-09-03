import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarea } from './lista-tarea';

describe('ListaTarea', () => {
  let component: ListaTarea;
  let fixture: ComponentFixture<ListaTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
