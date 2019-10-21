import React, { Component } from 'react';
import Option from './Option';
import Total from './Total';

class MainSummary extends Component {
    render() {
        return (
            <section className="main__summary">
                <Option
                selected={this.props.selected}
                />
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                    <Total cost={this.props.total} />
                    </div>
                </div>
            </section>
        )
    }
}
export default MainSummary;