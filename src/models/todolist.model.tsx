import { IsNotEmpty } from "class-validator";

export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

export class TodoItem implements Todo {
  id: string;

  @IsNotEmpty()
  text: string;
  isDone: boolean;

  constructor(id: string, text: string, isDone: boolean) {
    this.id = id;
    this.text = text;
    this.isDone = isDone;
  }
}