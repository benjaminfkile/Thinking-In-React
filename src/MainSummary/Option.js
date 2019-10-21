import React, { Component } from 'react';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

class Option extends Component {
    render() {
        const summary = Object.keys(this.props.selected)
            .map(i =>
                <div className="summary__option" key={i}>
                    <div className="summary__option__label">{i}
                    </div>
                    <div className="summary__option__value">{this.props.selected[i].name}
                    </div>
                    <div className="summary__option__cost">
                        <CurrencyFormat cost={this.props.selected[i].cost} />
                    </div>
                </div>)
        return (
            <div>
                <h2>Cart</h2>
                {summary}
            </div>
        )
    }
}

export default Option;