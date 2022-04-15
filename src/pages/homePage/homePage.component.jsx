import React from "react";
import { PizzaButton } from "../../components/button/button.component";
import './homePage.css'

export class HomePage extends React.Component {
    constructor() {
        super()


        this.state = {
            fTray: 0,
            price: 0,
            usualExtra: 0,
            twoExtra: 0
        }
    }




    fTrayClick = () => {
        this.setState({ price: this.state.price + 58 }, () => console.log(this.state.price))
        this.setState({ fTray: this.state.fTray + 1 }, () => console.log(this.state.fTray))
    }

    addUsualExtrasClick = () => {
        this.setState({ price: this.state.price + 63 }, () => console.log(this.state.price))
        this.setState({ usualExtra: this.state.usualExtra + 1 }, () => console.log(this.state.usualExtra))
    }

    twoShekelExtraClick = () => {
        this.setState({ price: this.state.price + 2 }, () => console.log(this.state.price))
        this.setState({ twoExtra: this.state.twoExtra + 2 }, () => console.log(this.state.twoExtra))
    }

    removeFClick = () => {
        this.setState({ price: this.state.price - 58 }, () => console.log(this.state.price))
        this.setState({ fTray: this.state.fTray - 1 }, () => console.log(this.state.fTray))
    }

    remove63Click = () => {
        this.setState({ price: this.state.price - 63 }, () => console.log(this.state.price))
        this.setState({ usualExtra: this.state.usualExtra - 1 }, () => console.log(this.state.usualExtra))
    }
    remove2Click = () => {
        this.setState({ price: this.state.price - 2 }, () => console.log(this.state.price))
        this.setState({ twoExtra: this.state.twoExtra - 2 }, () => console.log(this.state.twoExtra))
    }

    resetAllClick = () => {
        this.setState({ fTray: 0 })
        this.setState({ price: 0 })
        this.setState({ usualExtra: 0 })
        this.setState({ twoExtra: 0 })

    }



    render() {
        return (
            <div className="center">
                <h1>חישוב מגשים</h1>
                <table className="center">
                    <tr>
                        <td><PizzaButton id="addPizza" text='הוספה' onClick={this.fTrayClick} /></td>
                        <td>משפחתית</td>
                        <td><PizzaButton id="removePizza" disabled={this.state.fTray <= 0} text='הסרה' onClick={this.removeFClick} /></td>
                    </tr>
                    <tr>
                        <td> <PizzaButton id="extraUsual" text='הוספה' onClick={this.addUsualExtrasClick} /></td>
                        <td>מגש תוספות (63)</td>
                        <td> <PizzaButton id="remove63Tray" disabled={this.state.usualExtra <= 0} text='הסרה' onClick={this.remove63Click} /> </td>
                    </tr>

                    <tr>
                        <td> <PizzaButton id="2shekels" text='הוספה' onClick={this.twoShekelExtraClick} /> </td>
                        <td>פטריות, בולגרית, אקסטרה גבינה</td>
                        <td> <PizzaButton id="remove2Shekels" disabled={this.state.twoExtra <= 0} text='הסרה' onClick={this.remove2Click} /> </td>
                    </tr>
                    <tr>
                        <td/>
                        <th>{this.state.price} :מחיר</th>
                        <td/>

                    </tr>
                    <tr></tr>
                    <tr>
                        <td></td>
                        <th>:סיכום</th>
                    </tr>
                    <tr>
                        <td></td>

                        משפחתית: {this.state.fTray}
                        <br />
                        מגש תוספות: {this.state.usualExtra}
                        <br />
                        תוספות 2 שקל: {this.state.twoExtra}</tr>
                    <br />
                    <td></td>

                    <tr>
                        <td></td>
                        <td><PizzaButton id="reset" text='איפוס' onClick={this.resetAllClick} /></td>
                        <td></td>
                    </tr>

                </table>
            </div>


        )
    }
}