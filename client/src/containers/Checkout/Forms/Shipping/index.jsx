import React, { Component } from 'react';

import styles from './Form/styles';
import Form from './Form';
import { withStyles } from '@material-ui/core';

class ShippingForm extends Component {
  render() {
    const { 
      classes,
      availableRates, 
      chooosenRateIndex, 
      handleCheckoutForm, 
    } = this.props;
   
    return (
      <div>
        <Form 
          classes={classes}
          inputs={availableRates}
          chooosenRateIndex={chooosenRateIndex}
          handleChange={handleCheckoutForm}
        />
      </div>
    );
  }
};

export default withStyles(styles)(ShippingForm);