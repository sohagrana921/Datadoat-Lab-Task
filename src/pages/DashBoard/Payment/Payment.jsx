import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkout/CheckoutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const payableCourse = useLoaderData();
  // console.log(data);
  const price = payableCourse.price;
  // console.log(payableCourse);

  return (
    <div className="my-container">
      <SectionTitle heading="payment"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          cart={cart}
          price={price}
          payableCourse={payableCourse}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
