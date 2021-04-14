import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51IenADB6yRiixHJxFTRJMdUWU4PaasyIM7madmwLKD5ksFfDxt9CbpLSZzPbel0qO2fxY23HjRBE8x9JfrBayE2N00t3CU7T6V');

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;