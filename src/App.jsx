import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import AddBook from "./components/AddBook"
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />  
      <Route path='/add-book' element={<AddBook/>}/>
      </Routes>
    </div>
  );
}

export default App;
