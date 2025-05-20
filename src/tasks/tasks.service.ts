import { Injectable } from '@nestjs/common';
import { Task, TaskStatusEnum } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    // we want our controller to talk to our service
    // method to read tasks array
    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task | undefined{
        return this.tasks.find((task) => task.id === id);
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        const task: Task = {
           id:  uuid(), //autogenerate uuid. install package using 'yarn add uuid'
           title,
           description,
           status: TaskStatusEnum.OPEN,
        };
        // push it to task array
        this.tasks.push(task);

        // return this task so our controller can return it in response of http request
        return task;
    }

}
