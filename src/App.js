import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
}

    addNewTask = (e)=>{
      this.setState({
        newTask: e.target.value
      })
    }

    startSubmit = (e) =>{
      
      if (this.state.newTask !== ""){
        var taskId = this.state.tasks.length + 1
        this.setState({
          tasks: this.state.tasks.concat({id: taskId, name: this.state.newTask, done:false}),
          newTask: "",
        })
      }
      e.preventDefault();
    }

    startClick (e){
      const index = this.state.tasks.findIndex(task=> 
      task.name === e.target.innerHTML
      );
      
      this.setState({
        tasks:this.state.tasks.map((task, i)=>
        i === index ? {name: task.name, done: !task.done} : task )
      })
    }

  
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li onClick={this.startClick.bind(this)} className={task.done ? "done" : ""} key={task.index}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.startSubmit}>
            <input type="text" id="new-task"  className={this.state.newTask === "" ? "error" : ""} placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.addNewTask} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
