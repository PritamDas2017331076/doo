import { BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Edittor from './components/Edittor'
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
        <Route
          exact
          path="/" component={Home} 
        />

        <Route
          path="/home" component={Home} 
        />
        <Route
          path="/editor" component={Edittor} 
        />

        

    </Router>
    </div>
  );
}

export default App;
