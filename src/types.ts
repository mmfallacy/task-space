export interface Badge {
    badgeName: string;
    rarity: number;
}

export interface Resource {
    label: string;
    description: string;
    classification: string;
}

export interface Task {
    uid: string;
    name: string;
    category: string;
    deadline: Date;
    timescale: number;
}

export interface User {
    uid: string;
    name: string;
    badges: Badge[];
}