import { Component } from '@angular/core';

interface Tarea {
  id: string,
  name: string,
  isCompleted: boolean,
}

@Component({
  selector: 'app-lista-tarea',
  imports: [],
  templateUrl: './lista-tarea.html',
  styleUrl: './lista-tarea.css'
})
export class ListaTarea {
  items: Tarea[] = [
    {
      id: crypto.randomUUID(),
      name: "uno",
      isCompleted: false
    },
    {
      id: crypto.randomUUID(),
      name: "dos",
      isCompleted: false
    },

  ]
}
