export interface Task {
    uid: String;
    name: String;
    category: String;
    deadline: Date;
    timescale: Int16Array;
}