import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as PaymentMethodActions from './payment-method.actions';
import { initialState } from './payment-method.reducer';


@Injectable()
export class PaymentMethodEffects {

  storeKey = "prueba";
  
  constructor(private actions$: Actions) {}

  public loadPaymentMethods$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PaymentMethodActions.loadPaymentMethods),
    concatMap(() => {
      try {
        let storedList = JSON.parse(
          window.localStorage.getItem(this.storeKey)
        );
        if (!storedList) {
          storedList = initialState.paymentMethods.list;
          window.localStorage.setItem(
            this.storeKey,
            JSON.stringify(storedList)
          );
        }
        return of(
          PaymentMethodActions.loadPaymentMethodsSuccess({
            paymentMethodList: storedList
          })
        );
      } catch (e) {
        return of(PaymentMethodActions.loadPaymentMethodsFailure);
      }
    })
  )
);

}
