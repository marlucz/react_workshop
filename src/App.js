import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/home">Home </Link>
          <Link to="/search">Search contacts</Link>
        </nav>
        <Route path="/home" component={Home}></Route>
        <Route path="/search" component={Search}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
