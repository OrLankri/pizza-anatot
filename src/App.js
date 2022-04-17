
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

/* a copy for SET the props to other components

            price={this.state.price} 
            fTray={this.state.fTray} 
            usualExtra={this.state.usualExtra} 
            twoExtra={this.state.twoExtra}
            onChangePrice={(e) => this.setState({ price: e }, () => console.log(this.state.price))}
            onChangeUsualExtra={(e) => this.setState({ usualExtra: e }, () => console.log(this.state.usualExtra))}
            onChangeTwoExtra={(e) => this.setState({ twoExtra: e }, () => console.log(this.state.twoExtra))}
            onChangeFTray={(e) => this.setState({ fTray: e }, () => console.log(this.state.fTray))}

  or in a component who takes already the props:

  price={props.price}
                fTray={props.fTray}
                usualExtra={props.usualExtra}
                twoExtra={props.twoExtra}
                bigBottle={props.bigBottle}
                onChangeBigBottle={(e)=>this.setState({bigBottle:e})}
                onChangePrice={props.onChangePrice}
                onChangeUsualExtra={props.onChangeUsualExtra}
                onChangeTwoExtra={props.onChangeTwoExtra}
                onChangeFTray={props.onChangeFTray}
*/

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      price: 0,
      fTray: 0,
      usualExtra: 0,
      twoExtra: 0,
      bigBottle: 0
    }
  }

  render() {


    return (

      <div>
        <header className='header'>
          <div>
            <div className='pricePos'>{this.state.price} :מחיר</div>
            <div>
              <Link className='icon' to={'/pizza-anatot/pizzaCalculator'}><FontAwesomeIcon className='fa-1x' icon={faPizzaSlice} color='black' /></Link>
              <Link className='icon' to={'/pizza-anatot'}><FontAwesomeIcon className={'fa-1x'} icon={faHouseChimney} color='black' /></Link>
            </div>
          </div>
        </header>
        <Routes>

          <Route path='pizza-anatot' element={<MainPage price={this.state.price} fTray={this.state.fTray} usualExtra={this.state.usualExtra} twoExtra={this.state.twoExtra}
            onChangePrice={(e) => this.setState({ price: e }, () => console.log(this.state.price))}
            onChangeUsualExtra={(e) => this.setState({ usualExtra: e }, () => console.log(this.state.usualExtra))}
            onChangeTwoExtra={(e) => this.setState({ twoExtra: e }, () => console.log(this.state.twoExtra))}
            onChangeFTray={(e) => this.setState({ fTray: e }, () => console.log(this.state.fTray))}
            bigBottle={this.state.bigBottle}
            onChangeBigBottle={(e) => this.setState({ bigBottle: e })}
          />}
          />


          <Route path={'/pizza-anatot/pizzaCalculator'} element={<CalculatePizzaPage
            price={this.state.price} onChangePrice={(e) => this.setState({ price: e }, () => console.log(this.state.price))}
            fTray={this.state.fTray} onChangeFTray={(e) => this.setState({ fTray: e }, () => console.log(this.state.fTray))}
            usualExtra={this.state.usualExtra} onChangeUsualExtra={(e) => this.setState({ usualExtra: e }, () => console.log(this.state.usualExtra))}
            twoExtra={this.state.twoExtra} onChangeTwoExtra={(e) => this.setState({ twoExtra: e }, () => console.log(this.state.twoExtra))}
            bigBottle={this.state.bigBottle}
            onChangeBigBottle={(e) => this.setState({ bigBottle: e },()=>console.log(this.state.bigBottle))}
          />} />

        </Routes>
      </div>


    )
  }

}

export default App;
