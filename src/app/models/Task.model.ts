import { SubTask } from "./SubTask.model";

export class Task {
    constructor(public nameTask: string, public subTask: SubTask[] = []) {}
}
// Compare this snippet from src/app/models/task.model.ts:
