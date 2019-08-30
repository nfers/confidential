import { computed, observable } from "mobx"
import Xlr8rms from "./helpers/xlr8rms"
import  "devextreme-react/";

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
   @observable operation = "";

   @computed
   get calcResult(){
     let results = [];

      if (this.todos.length > 0 && this.operation !=""){
        this.todos.forEach(({data})=>{
          Object.keys(data).forEach((key, index) =>{
            if(typeof results[index] === 'undefined'){
              results[index] = data[key];
            }
            else{
              switch(this.operation){
                case '*': results[index] *= data[key]; break;
                case '/': results[index] /= data[key]; break;
                case '+': results[index] += data[key]; break;
                case '-': results[index] -= data[key]; break;
              }
            }
          })
        })
      }

      return results;
   }

};

export default new TodoStore;

