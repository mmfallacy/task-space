export interface Task {
    uid: string;
    name: string;
    category: string;
    deadline: Date;
    timescale: Int16Array;
}