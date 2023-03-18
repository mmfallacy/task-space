export interface Badge {
    badgeName: String;
    rarity: Int16Array;
}

export interface Resource {
    label: String;
    description: String;
    classification: String;
}

export interface Task {
    uid: String;
    name: String;
    category: String;
    deadline: Date;
    timescale: Int16Array;
}

export interface User {
    uid: String;
    name: String;
    classification: Int16Array;
    badges: Badge[];
}