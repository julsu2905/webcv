import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import './App.css';

import Header from "./component/Header";

class App extends Component{
  render(){
    return(
      <div>
        <Header></Header>
      </div>      
    )
  }
}

export default App;
