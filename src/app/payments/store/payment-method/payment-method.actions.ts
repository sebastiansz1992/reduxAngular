import { createAction, props } from '@ngrx/store';
import { PaymentMethod } from './payment-method.model';

export const loadPaymentMethods = createAction(
  '[PaymentMethod] Load PaymentMethods'
);

export const addPaymentMethod = createAction(
  '[PaymentMethod] Add PaymentMethod',
  props<{ newPaymentMethod: PaymentMethod }>()
);

export const selectPreferredPaymentMethod = createAction(
  '[PaymentMethod] Select preferred PaymentMethod',
  props<{ preferredId: string }>()
);

export const setExpirationPaymentMethod = createAction(
  '[PaymentMethod] Set Expiration Date on PaymentMethod',
  props<{ updatedPaymentMethod: PaymentMethod }>()
);

export const loadPaymentMethodsSuccess = createAction(
  '[PaymentMethod] Load PaymentMethods Success',
  props<{ paymentMethodList: PaymentMethod[] }>()
);

export const loadPaymentMethodsFailure = createAction(
  '[PaymentMethod] Load PaymentMethods Failure'
);
