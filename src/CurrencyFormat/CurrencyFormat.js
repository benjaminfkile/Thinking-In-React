import React, { Component } from 'react';
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CurrencyFormat extends Component {
    render() {
        return (
            <div>
                {USCurrencyFormat.format(this.props.cost)}
            </div>

        )
    }
}
export default CurrencyFormat;