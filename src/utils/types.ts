export interface ITodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface ErrorResponse extends Error {
  success: boolean;
}
