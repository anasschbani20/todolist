import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';

  tasks = [
    {
      id: 1,
      title: 'Learn Angular',
      done: false,
      is_editing: false,
      priority: 3
    },
    {
      id: 2,
      title: 'Learn React',
      done: false,
      is_editing: false,
      priority: 2
    },
    {
      id: 3,
      title: 'Learn Vue',
      done: false,
      is_editing: false,
      priority: 1
    },
    {
      id: 4,
      title: 'Learn Svelte',
      done: false,
      is_editing: false,
      priority: 6
    },
    {
      id: 5,
      title: 'Learn Laravel',
      done: false,
      is_editing: false,
      priority: 5
    },
    {
      id: 6,
      title: 'Learn NodeJS',
      done: true,
      is_editing: true,
      priority: 4
    }

  ]
  newTask = {
    id: this.tasks?.length + 1,
    title: '',
    done: false,
    is_editing: false,
    priority: this.tasks?.length + 1
  };

  getTasks() {
    return this.tasks.sort((a, b) => a.priority - b.priority);
  }

  toggleEditItem(task: any) {
    task.is_editing = !task.is_editing;
  }

  deleteTask(task: any) {
   this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  toggleTaskDone(task: any){
    task.done = !task.done;
  }

  addNewTask(){
    this.tasks.push(this.newTask);
    this.newTask = {
      id: this.tasks?.length + 1,
      title: '',
      done: false,
      is_editing: false,
      priority: this.tasks?.length + 1
    };
  }
}
