import { createEffect, ofType, Actions } from '@ngrx/effects';
import { concatMap, map, catchError } from 'rxjs/operators';
import * as ExchangeRateActions from './exchange-rate.actions';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class ExchangeRateEffects {
  public loadExchangeRates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExchangeRateActions.loadExchangeRates),
      concatMap(() =>
        this.http.get<any>("https://api.exchangeratesapi.io/latest").pipe(
          map(res =>
            ExchangeRateActions.loadExchangeRatesSuccess({ rates: res.rates })
          ),
          catchError(err =>
            of(ExchangeRateActions.loadExchangeRatesError({ rates: err }))
          )
        )
      )
    )
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
