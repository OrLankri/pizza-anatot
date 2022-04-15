
import './App.css';
import React from 'react';
import { Route , Routes } from 'react-router-dom';

import { HomePage } from './pages/homePage/homePage.component';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
    }
  }


  render(){
    

    return(
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
        </Routes>
        
      

    )
  }

}

export default App;
