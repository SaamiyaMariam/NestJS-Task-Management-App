import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [];

    // we want our controller to talk to our service
    // method to read tasks array
    public getAllTasks() {
        return this.tasks;
    }
}
