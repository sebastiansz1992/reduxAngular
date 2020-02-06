export interface PaymentMethod {
    id:           string;
    experitacion: Date;
}

export interface PaymentMethods {
    list:      PaymentMethod[];
    preferred: string;
}