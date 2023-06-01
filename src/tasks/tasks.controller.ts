import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './models/task.model';
import { CreateTaskDTO } from './dto/createTask.dto';

@Controller('tasklist')
export class TasksController {
    constructor(private taskInstance: TasksService) {
    }
    @Get()
    getTaskList(): Task[] {
        return this.taskInstance.getTaskList();
    }

    @Post()
    createNewTask(@Body() createTaskDTO: CreateTaskDTO): Task {
        return this.taskInstance.createNewTask(createTaskDTO);
    }
}
