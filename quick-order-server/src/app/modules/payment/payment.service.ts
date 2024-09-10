import orderModel from "../order/order.model";

const confirmationService = async (transactionId: string) => {
  const result = await orderModel.findOneAndUpdate(
    { transactionId },
    {
      paymentStatus: "Paid",
    }
  );

  return result;
};

export const paymentServices = {
  confirmationService,
};
