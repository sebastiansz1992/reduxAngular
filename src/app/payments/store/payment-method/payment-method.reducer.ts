import { Action, createReducer, on } from '@ngrx/store';
import * as PaymentMethodActions from './payment-method.actions';
import { PaymentMethods, PaymentMethod } from './payment-method.model';

export const paymentMethodFeatureKey = 'paymentMethod';

export interface PaymentMethodsState  {
  paymentMethods: PaymentMethods;
}

export const initialState: PaymentMethodsState = {
  paymentMethods: {list: [], preferred: null}
};

const paymentMethodReducer = createReducer(

  initialState,
  on(PaymentMethodActions.loadPaymentMethods, state => state),
  on(PaymentMethodActions.addPaymentMethod, (state, { newPaymentMethod }) => addPaymentMethodAcction(state, newPaymentMethod)),
  on(PaymentMethodActions.loadPaymentMethodsSuccess, (state, { paymentMethodList }) => effectsSuccess(state, paymentMethodList)),
  on(PaymentMethodActions.loadPaymentMethodsFailure, (state) => state),
);

function effectsSuccess(state, paymentMethodList) {
  return {
    ...state,
    paymentMethods: { ...state.paymentMethods, list: paymentMethodList }
  }; 
}

function addPaymentMethodAcction(state: PaymentMethodsState, newPaymentMethod: PaymentMethod) {
  return {
    ...state,
      paymentMethods: {
      ...state.paymentMethods,
      list: [...state.paymentMethods.list, newPaymentMethod]
    }
  }
}

export function reducer(state: PaymentMethodsState | undefined, action: Action) {
  return paymentMethodReducer(state, action);
}
