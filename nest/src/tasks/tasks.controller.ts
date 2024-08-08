import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './tasks.interface';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    @Get('/')
    getAllTask() {
        return this.taskService.getAllTask();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.createTaskDto(createTaskDto);
    }
}

