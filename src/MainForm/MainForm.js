import React, { Component } from 'react'
import Specs from './Specs';
class MainForm extends Component {

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <div key={featureHash}>
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <Specs
              updateFeature={this.props.updateFeature}
              selected={this.props.selected}
              features={this.props.features}
              feature={feature}
              featureHash={featureHash}
            />
          </fieldset>
        </div>
      )
    })
    return (
      <div className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </div>
    )
  }
}
export default MainForm;