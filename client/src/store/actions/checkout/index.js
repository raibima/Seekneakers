import axios from 'axios';
import { DEFAULT_URI } from '../../../config';
import * as actionTypes from '../actionTypes';

export const setActiveStep = currStep => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_ACTIVE_STEP,
      currStep : currStep,
    });
  }
}

export const handleCheckoutForm =  (key, value) => {
  return dispatch => {
    dispatch({
      type: actionTypes.HANDLE_CHECKOUT_FORM,
      key: key,
      value: value
    });
  };
};

export const submitShippingAddress = data => {
  return async dispatch => {
    dispatch({
      type: actionTypes.SUBMIT_ORDER_LOADING,
    });

    const {
      name,
      street,
      city,
      state,
      zip,
      country,
      phone,
      email,
    } = data;

    try {
      const { data } = await axios({
        method: 'POST',
        url: `${DEFAULT_URI}/shipping`,
        data: {
          name,
          street,
          city,
          state,
          zip,
          country,
          phone,
          email,
        },
        headers: {
          token: localStorage.getItem('token'),
        }
      });
      
      const { availableRates } = data;

      dispatch({
        type: actionTypes.SUBMIT_SHIPPING_ADDRESS_SUCCEED,
        availableRates,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.SUBMIT_ORDER_FAILED,
      });
    }
  }
}