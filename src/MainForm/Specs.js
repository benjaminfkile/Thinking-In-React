import React, { Component } from 'react'
import slugify from 'slugify';
import Parts from './Parts';

class Specs extends Component {
  render() {
    const options = this.props.features[this.props.feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash}>
          <Parts
            item={item}
            itemHash={itemHash}
            features={this.props.features}
            feature={this.props.feature}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        </div>
      );
    })
    return (
      <div>
        {options}
      </div>
    )
  };
}
export default Specs;