import React, { Component } from 'react';
import './App.css';
import { todos } from './Todos.json';
import TodoForm from './Components/TodoForm.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
     todos:todos
    }
  }

  handleAppTodo = (todo) =>{
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo = (index) =>{
    if (window.confirm('Are you sure you want to delete it?')){
      this.setState({
        todos: this.state.todos.filter((e,i)=>{
          return i !== index;
        })
      })
    }

  }
  render() {
    const todos = this.state.todos.map((todo,index) =>{
      return(
       <div key ={index} className="col-md-4">
        <div className="card mt-4">
        <div className="card-header">
         <h3 >{todo.title}</h3>
         <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
        </div>
        <div className ="card-body">
        <p>{todo.description}</p>
        <p><mark>{todo.responsible}</mark></p>
        </div>
        <div className="card-footer">
          <button
          className="btn btn-danger"
          onClick={this.removeTodo.bind(this, index)}
          >Delete</button>
        </div>
        </div>
       </div>
      )
    });
    return (
      <div className="App">
      <nav> 
         <h1>Tasks <span className ="badge badge-pill badge-light ml-2">
         {this.state.todos.length}
        </span>
        </h1> 
        </nav>
      <div className="container">
      <div className="row mt-4">
      <TodoForm onAddTodo={this.handleAppTodo}/>
      {todos}
      </div>
      </div>
      </div>
    );
  }
}

export default App;


/*Props es la manera en la que mandamos informacion por ejemplo status y propiedades que ponemos
 la etiqueta de los componentes en app.js, en el componente propio en si podemos acceder a dicha propiedad con JSX:
 {this.props.nombreDeLaPropiedad} */
 /*El constructor de la clase debe llevar a fuerzas super() para funcionar y ya dentro de el usamos 
 this.state que es un objeto con propiedades.*/
 /*Para acceder a los datos que sean arreglos (como json) de state dentro del return de render hay que
 crear una interface en render antes del return. Le puedes crear un html para cada elemento del arreglo
 o incluso un componente para cada uno de ellos, lo mas conveniente es usar map y se lo asignas a una constante. (Si lo que esta en state
  es solo un dato y no un arreglo lo puedes acceder con this.state.NombredelDato)*/
  /* Para pasar una propiedad en especifico como argumento en un manejador a un metodo hay que usar bind:
  onClick={this.removeTodo.bind(this, index)}*/