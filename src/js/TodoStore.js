import { computed, observable } from "mobx"
import Xlr8rms from "./helpers/xlr8rms"

const xlr8rms = new Xlr8rms();

xlr8rms.getData();

export class TodoStore {
  
  constructor (){
    xlr8rms.getData().then((resp)=>{
      // console.log(resp.data);
      this.todos = resp.data;
      this.operation = resp.operation;      
    });
  }
   @observable todos = [];
   @observable operation = [];
   


   @observable filter = ""
   @computed get filteredTodos() {
     var matchesFilter = new RegExp(this.filter, "i")
     return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
   }

   createTodo(value) {
     this.todos.push(new Todo(value))
   }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos)
  }
};

export default new TodoStore

