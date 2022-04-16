
import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './header.css'


import { CalculatePizzaPage } from './pages/calculatePizzaPage/calculatePizzaPage.component';
import { PizzaButton } from './components/button/button.component';
import { MainPage } from './pages/mainPage/mainPage.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {


    return (

      <div>
        <header className='header'>
          <Link className='icon' to={'/pizza-anatot/pizzaCalculator'}><FontAwesomeIcon className='fa-1x' icon={faPizzaSlice} color='black' /></Link>
          <Link className='icon' to={'/pizza-anatot'}><FontAwesomeIcon className={'fa-1x'} icon={faHouseChimney} color='black' /></Link>
        </header>
        <Routes>
          <Route path='pizza-anatot' element={<MainPage />} />
          <Route path={'/pizza-anatot/pizzaCalculator'} element={<CalculatePizzaPage price={this.state.price} />} />
        </Routes>
      </div>


    )
  }

}

export default App;
