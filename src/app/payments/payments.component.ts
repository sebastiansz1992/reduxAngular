import { Component, OnInit } from '@angular/core';
import { PaymentMethodService } from './store/payment-method/payment-method.service';
import { PaymentMethod, PaymentMethods } from './store/payment-method/payment-method.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  public paymentMethodList$: Observable<PaymentMethod[]>;
  public preferredPaymentMethod$: Observable<string>;
  constructor(private paymentMethodService: PaymentMethodService) { }
  
  ngOnInit() {
    this.paymentMethodService.loadPaymentMethods();
    const visa: PaymentMethod = {
      id: '1234 7896 3214 6549',
      experitacion: new Date(2020, 6-1, 30)
    }
    this.paymentMethodService.addPaymentMethod(visa);
    this.paymentMethodService.selectPreferredPaymentMethod(visa.id);
    visa.experitacion = new Date(2021, 12-1, 31);
    this.paymentMethodService.setExpirationPaymentMethod(visa); 
    
    this.paymentMethodList$ = this.paymentMethodService.getPaymentMethodsList$();
    this.preferredPaymentMethod$ = this.paymentMethodService.getPreferredPaymentMethod$();

  }

}
