import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.changeTitle = this.changeTitle.bind(this); //constructor

  this.state = {
    title:"Hola mundo desde Estado"
  }
}
  render() {
    return (
      <div>
      <h1>{this.state.title}</h1>
      <button onClick={this.changeTitle}>Cambio de titulo</button>
      </div>
    );
  }
  changeTitle() {
    this.setState({
      title:"Nuevo titulo"
    })
}
}

export default App;
