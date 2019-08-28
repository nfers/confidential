import { autorrun, observable, autorun } from "mobx"

class TodoStoreTwo {
    @observable todos = ["buy milk", "buy eggs"]
    @observable filter = ""
}
var store = window.store = new TodoStoreTwo


export default store

autorun(() => {
    console.log(store.filter)
    console.log(store.todos[0], store.todos[1])
})