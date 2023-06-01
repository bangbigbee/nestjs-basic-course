
export class Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
export enum TaskStatus {
    DONE = "DONE",
    DOING = "DOING",
    OPEN = "OPEN"
}