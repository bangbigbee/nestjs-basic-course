import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './models/task.model';
import { CreateTaskDTO } from './dto/createTask.dto';

@Injectable()
export class TasksService {
    myTasks: Task[] = []
    getTaskList(): Task[] {
        return this.myTasks;
    }

    createNewTask(createTaskDTO: CreateTaskDTO): Task {
        const task = {
            id: 1,
            ...createTaskDTO,
            status: TaskStatus.OPEN
        }
        this.myTasks.push(task);
        console.log("check my tasks: ", this.myTasks)
        return task;
    }
}
