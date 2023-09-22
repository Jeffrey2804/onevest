import { useEffect, useState } from "react";
import { authAxiosHelper, noAuthAxiosHelper } from "../../Helpers/axiosHelper";
import HomeLayout from "../../Layouts/HomeLayout";
import CTAButton from "../../Components/CTAButton";

import { createContext } from "react";
import PaymentForm from "../../Components/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const SubscribeContext = createContext({});

const Subscribe = () => {
  const [plan, setPlan] = useState(null);
  const [productId, setProductId] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [intentData, setIntentData] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const navigate = useNavigate();
  const stripePromise = loadStripe(
    "pk_test_51NaYb8SByHklHSidKHGRztjSwpIfjxx7lZ2LN5VkyCxPWAVsHlU0IkchMQy0NlFX2lHDmvlu86EWmgNaYkm0vWNc00kFQtT1wT"
  );

  const fetchPlan = async () => {
    await noAuthAxiosHelper
      .get("subscription/plan", {
        headers: { token: localStorage.getItem("cflToken") },
      })
      .then((response) => {
        console.log(response.data);
        const data = response.data.body.data[0];
        setPlan(response.data.body.data[0]);
        setProductId(response.data.body.data[0].id);
        setIntentData({
          amount: data.default_price.unit_amount,
          currency: data.default_price.currency,
          description: data.description,
        });
      })
      .catch((error) => {
        if (error?.response?.status === 400) {
          navigate("/login");
        }
      });
  };

  useEffect(() => {
    fetchPlan();
  }, []);
  return (
    <SubscribeContext.Provider value={productId}>
      <HomeLayout>
        {plan && page === 1 ? (
          <div className="flex flex-col items-center gap-20">
            <p className="capitalize">Subscribe to {plan?.name}</p>
            <img src={plan?.images} className="w-[200px]" />
            <CTAButton
              action={async () => {
                setLoading(true);
                await authAxiosHelper
                  .post("create/payment/intent", intentData, {
                    headers: { token: localStorage.getItem("cflToken") },
                  })
                  .then((response) => {
                    setLoading(false);
                    console.log(response);
                    setClientSecret(response.data.body.clientSecret);
                    console.log(response.data.body.clientSecret);
                    setPage(2);
                  })
                  .catch((error) => {
                    setLoading(false);
                    console.log(error);
                  });
              }}
              disabled={loading}
            />
          </div>
        ) : (
          page === 2 &&
          stripePromise &&
          clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <PaymentForm />
            </Elements>
          )
        )}
      </HomeLayout>
    </SubscribeContext.Provider>
  );
};

const Checkout = () => {
  return <div></div>;
};

export default Subscribe;
