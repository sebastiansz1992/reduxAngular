import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { StoreModule } from '@ngrx/store';
import * as fromPaymentMethod from './store/payment-method/payment-method.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PaymentMethodEffects } from './store/payment-method/payment-method.effects';


@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    StoreModule.forFeature(fromPaymentMethod.paymentMethodFeatureKey, fromPaymentMethod.reducer),
    EffectsModule.forFeature([PaymentMethodEffects])
  ]
})
export class PaymentsModule { }
