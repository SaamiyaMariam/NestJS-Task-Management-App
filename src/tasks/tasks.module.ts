import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController], //allows us to inject service into TasksController
  providers: [TasksService],
})
export class TasksModule {}
