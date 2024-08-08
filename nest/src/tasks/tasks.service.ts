import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './tasks.interface';

@Injectable()
export class TasksService {
    getAllTask() {
        return '1213';
    }

    createTaskDto(createTaskDto: CreateTaskDto) {
        const { title, description } = createTaskDto;

        return { title, description };
    }
}

