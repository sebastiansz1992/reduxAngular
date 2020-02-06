import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as PaymentMethodActions from './payment-method.actions';



@Injectable()
export class PaymentMethodEffects {

  loadPaymentMethods$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PaymentMethodActions.loadPaymentMethods),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => PaymentMethodActions.loadPaymentMethodsSuccess({ data })),
          catchError(error => of(PaymentMethodActions.loadPaymentMethodsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
