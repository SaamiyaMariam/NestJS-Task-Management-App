import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    // we want our controller to talk to our service
    // method to read tasks array
    public getAllTasks(): Task[] {
        return this.tasks;
    }
}
