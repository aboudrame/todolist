import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'todolist';

  newTodo = '';
  state = ['all', 'completed', 'incompleted' ];
  todoItem: TodoItem[] = [];

  stateSelected = 'all';

  term: boolean | undefined = undefined;

  constructor() {}

  ngOnInit() {
  }

  onAddTodo(e: any) {
    if (!e) { return; }

    const filter = this.todoItem.filter(x => x.item === e.trim());

    if (filter.length) { return; }

    const newTodo = {
      item: this.newTodo, completed: false
    }
    this.todoItem.push(newTodo);
    this.newTodo = '';
  }

  onAction(e: any, i = 0, action = 'check') {
    const _todoItem = [ ...this.todoItem ];

    if (action === 'check') {
      _todoItem[i].completed = !_todoItem[i].completed;
    }

    if (action === 'trash') {
      _todoItem.splice(i, 1);
    }

    this.todoItem = _todoItem;
  }

  onChange(e: any) {
    this.stateSelected = e.target.value;
    if (this.stateSelected === 'completed') {
      this.term = true;
    } else if (this.stateSelected === 'incompleted') {
      this.term = false;
    } else {
      this.term = undefined;
    }
  }
}

export class TodoItem {
  item: string = '';
  completed: boolean = false;
}
