 // Vista (View) en esta clase muestra al usuario el resultado que dan ambas clases
 import { Modelo } from "./Modelo";
 import { Vista_Modelo } from "./vista modelo";
 export class Vista {
  // Referencia al ViewModel
  constructor(private viewModel: Vista_Modelo) {}

  // Método para mostrar las tareas en la Vista
  showTasks(): void {
    for (const tarea of this.viewModel.tasks) {
      console.log(`Tarea: ${tarea.title} - Completada: ${tarea.completed}`);
    }
  }
}