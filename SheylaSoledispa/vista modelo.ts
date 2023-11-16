 // Vista Modelo (ViewModel) esta clase sirve como un puente entre las otras dos para realizar los procesos.
 import { Modelo } from "./Modelo";
 export class Vista_Modelo {
  // Lista de tareas
  tasks: Modelo[] = [];

  // Método para agregar una tarea al ViewModel
  addTask(title: string): void {
    const task = new Modelo(title);
    this.tasks.push(task);
  }

  // Método para marcar una tarea como completada en el ViewModel
  completeTask(task: Modelo): void {
    task.completed = true;
  }
}