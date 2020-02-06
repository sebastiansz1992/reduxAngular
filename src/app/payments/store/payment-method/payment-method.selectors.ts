import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPaymentMethod from './payment-method.reducer';

export const selectPaymentMethodState = createFeatureSelector<fromPaymentMethod.State>(
  fromPaymentMethod.paymentMethodFeatureKey
);
