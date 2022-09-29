export interface Dict<T = {}> {
  [key: string]: T;
}

export interface ITodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}