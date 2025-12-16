export type Task = {
    id: number;
    title: string;
    description?: string;
    createdAt: Date;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    projectId: string;
}

export type Project = {
    id: number;
    title: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
};

export type ProjectWithTasks = Project & {
    tasks: Task[];
};

const project1Tasks: Task[] = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        createdAt: new Date(),
        completed: false,
        priority: 'low',
        projectId: '1',
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        createdAt: new Date(),
        completed: false,
        priority: 'medium',
        projectId: '1',
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        createdAt: new Date(),
        completed: false,
        priority: 'high',
        projectId: '1',
    }, 
];

const project2Tasks: Task[] = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        createdAt: new Date(),
        completed: false,
        priority: 'low',
        projectId: '2',
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        createdAt: new Date(),
        completed: false,
        priority: 'medium',
        projectId: '2',
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        createdAt: new Date(),
        completed: false,
        priority: 'high',
        projectId: '2',
    },
];

const project3Tasks: Task[] = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        createdAt: new Date(),
        completed: false,
        priority: 'low',
        projectId: '3',
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        createdAt: new Date(),
        completed: false,
        priority: 'medium',
        projectId: '3',
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        createdAt: new Date(),
        completed: false,
        priority: 'high',
        projectId: '3',
    },
];

export const projects: ProjectWithTasks[] = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Description 1',
        createdAt: new Date(),
        updatedAt: new Date(),
        tasks: project1Tasks,
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description 2',
        createdAt: new Date(),
        updatedAt: new Date(),
        tasks: project2Tasks,
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Description 3',
        createdAt: new Date(),
        updatedAt: new Date(),
        tasks: project3Tasks,
    },
];
