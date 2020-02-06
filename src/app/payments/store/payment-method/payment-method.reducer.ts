import { Action, createReducer, on } from '@ngrx/store';
import * as PaymentMethodActions from './payment-method.actions';

export const paymentMethodFeatureKey = 'paymentMethod';

export interface State {

}

export const initialState: State = {

};

const paymentMethodReducer = createReducer(
  initialState,

  on(PaymentMethodActions.loadPaymentMethods, state => state),
  on(PaymentMethodActions.loadPaymentMethodsSuccess, (state, action) => state),
  on(PaymentMethodActions.loadPaymentMethodsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return paymentMethodReducer(state, action);
}
