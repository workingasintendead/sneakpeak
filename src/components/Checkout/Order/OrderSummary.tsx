import { OrderData } from '../../../types';

interface Props {
  customer: OrderData['customer'];
  estimatedTimeOfArrival: string;
  paymentType: string;
  dateOfPurchase: string;
}

const OrderSummary: React.FC<Props> = ({
  customer,
  estimatedTimeOfArrival,
  paymentType,
  dateOfPurchase,
}) => {
  const { address } = customer;

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex justify-between gap-4">
          <div>
            <p className="font-semibold text-base mb-1">Payment Type</p>
            <p className="capitalize">{paymentType}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-base mb-1">Date of Purchase</p>
            <p>{dateOfPurchase}</p>
          </div>
        </div>
        <div className="flex justify-between gap-4 text-sm">
          <div>
            <p className="font-semibold text-base mb-1">Shipping to</p>
            <p>{customer.name}</p>
            <p>{address.line1}</p>
            {address.line2 && <p>{address.line2}</p>}
            <p>
              {address.city}, {address.state} {address.postal_code}
            </p>
            <p>{address.country}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-base mb-1">Estimated delivery</p>
            <p>{estimatedTimeOfArrival}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
