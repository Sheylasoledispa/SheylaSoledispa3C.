  // Uso
  import { Modelo} from "./Modelo";
  import { Vista_Modelo } from "./vista modelo";
  import { Vista } from "./vista";
  // Creamos instancias
  const viewModel = new Vista_Modelo();
  const view = new Vista(viewModel);

  // Agregamos una tarea a través del Vista Modelo
  viewModel.addTask("Hacer la compra");

  // Mostramos las tareas a través de la Vista
  view.showTasks();

  // Marcamos una tarea como completada a través del Vista Modelo
  viewModel.completeTask(viewModel.tasks[0]);

  // Mostramos las tareas actualizadas
  view.showTasks();