import React, { Component } from 'react';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

class Total extends Component {
    render() {
        return (
            <div>
                <CurrencyFormat
                cost={this.props.cost}
                />
            </div>
        )
    }
}
export default Total;