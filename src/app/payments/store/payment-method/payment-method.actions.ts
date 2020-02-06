import { createAction, props } from '@ngrx/store';

export const loadPaymentMethods = createAction(
  '[PaymentMethod] Load PaymentMethods'
);

export const loadPaymentMethodsSuccess = createAction(
  '[PaymentMethod] Load PaymentMethods Success',
  props<{ data: any }>()
);

export const loadPaymentMethodsFailure = createAction(
  '[PaymentMethod] Load PaymentMethods Failure',
  props<{ error: any }>()
);
