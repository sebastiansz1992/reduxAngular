import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaymentMethodsState, paymentMethodFeatureKey } from './payment-method.reducer';

export const selectPaymentMethodState = createFeatureSelector<PaymentMethodsState>(
  paymentMethodFeatureKey
);

export const getPaymentMethodState = createFeatureSelector<PaymentMethodsState>(
  paymentMethodFeatureKey
);

export const getPaymentMethodsList = createSelector(
  getPaymentMethodState,
  (state: PaymentMethodsState) => state.paymentMethods.list
);

export const getPreferredPaymentMethod = createSelector(
  getPaymentMethodState,
  (state: PaymentMethodsState) => state.paymentMethods.preferred
);
