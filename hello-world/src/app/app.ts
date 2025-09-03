import { Component  } from '@angular/core';
import { ListaTarea } from './lista-tarea/lista-tarea';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ListaTarea]
})
export class App {
  // protected readonly title = signal('hello-world');
  title = "hello world"
}
