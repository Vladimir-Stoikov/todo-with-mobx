import { makeAutoObservable } from 'mobx';

const localData = sessionStorage.getItem('data') ? JSON.parse(sessionStorage.getItem('data')) : [];

class Store {
  data = localData;
  constructor() {
    makeAutoObservable(this);
  }

  addToDo(toDo) {
    this.data.push(toDo);
    sessionStorage.setItem('data', JSON.stringify(this.data));
  }
  removeToDo(idRemove) {
    this.data = this.data.filter((todo, id) => id !== idRemove);
    sessionStorage.setItem('data', JSON.stringify(this.data));
  }
  completeTodo(idComplete) {
    this.data.map((todo, id) => (id === idComplete ? (todo.complete = !todo.complete) : null));
    sessionStorage.setItem('data', JSON.stringify(this.data));
  }
}

export default new Store();
