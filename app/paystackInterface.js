import PaystackPop from "@paystack/inline-js";

export const handlePayment = (email, amount, router) => {
  if (window === "undefined") {
    return;
  }
  const paystack = new PaystackPop();

  paystack.newTransaction({
    key: "pk_test_aa69027aa9cd0d4d8c982dc1928559e94a66e38e",
    email,
    amount: amount * 100,
    metadata: { email },
    onSuccess: (transaction) => {
      router.push("/success?reference=" + transaction.reference);
    },
    onCancel: () => {
      // user closed popup
    },
  });
};
