import React, { Component } from 'react';
import './App.css';
import Access from './axios';
import Puppy from './components/Puppy';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Form from "./components/Form";


class App extends Component {
  render() {
    Access.getRequest()
    return (
      <Router>
        <div>
          <Route exact path='/' component={Puppy} />
          <Route path='/form' component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
