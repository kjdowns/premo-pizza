export class Order {
    orderId: number;
    customer: object;
    employee: object;
    timestamp: Date;
    subtotal: DoubleRange;
    discount: DoubleRange;
    total: DoubleRange;
}