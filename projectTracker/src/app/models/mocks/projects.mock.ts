import { Project } from "../project.model";
import { Task } from "../task.model";

export const projectCollection: Project[] = [
    new Project(1,"UyDurulMusH isim", "Desc of A", new Date(2023,9,10), 0.3, 
    [
        new Task(1, "Task 1", "Task 1 desc", new Date(2023,10,1), 1, false ),
        new Task(2, "Task 2", "Task 2 desc", new Date(2023,10,5), 1, false ),
        new Task(3, "Task 3", "Task 3 desc", new Date(2023,10,10), 1, false )
    ], 1),

    new Project(2,"GAYDIRI GUBBAK", "Desc of B", new Date(2023,9,10), 0.3, 
    [
        new Task(4, "Task 1", "Task 1 desc", new Date(2023,10,1), 2, false ),
        new Task(5, "Task 2", "Task 2 desc", new Date(2023,10,5), 2, false ),
        new Task(6, "Task 3", "Task 3 desc", new Date(2023,10,10), 2, false )
    ], 2),

    new Project(3,"hebele hubele", "Desc of A", new Date(2023,9,10), 0.3, 
    [
        new Task(7, "Task 1", "Task 1 desc", new Date(2023,10,1), 3, false ),
        new Task(8, "Task 2", "Task 2 desc", new Date(2023,10,5), 3, false ),
        new Task(0, "Task 3", "Task 3 desc", new Date(2023,10,10), 3, false )
    ], 3) 

]