import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {Action,Originals,Comedy,Horror,Romance} from './urls'

function App() {
  return (
    <div className="App">
       
       <NavBar/>
       <Banner/>
       <RowPost url ={Originals} title="Netflix Originals"/>
       <RowPost url={Action} title="Action" isSmall/>
       <RowPost url={Comedy} title="Comedy" isSmall/>
       <RowPost url={Horror} title="Horror" isSmall/>
       <RowPost url={Romance} title="Romance" isSmall/>
    </div>
  
      
  );
}

export default App;
