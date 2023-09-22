import { PaymentElement, AddressElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import CTAButton from "../CTAButton";
import { HStack, Text, VStack, useToast } from "@chakra-ui/react";

const PaymentForm = () => {
  const toast = useToast();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [address, setAddress] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });
    if (error) {
      toast({ title: error.message, status: "error" });
    }
    setIsProcessing(false);
  };
  return (
    <VStack width={"full"} py={"40px"}>
      <VStack
        borderRadius={"10px"}
        width={"40%"}
        gap={"20px"}
        background={"#fff"}
        py={"40px"}
        boxShadow={"1px 14px 19px -1px rgba(0,0,0,0.6);"}
      >
        <Text fontSize={"2xl"} color={"white.800"}>
          Checkout
        </Text>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            margin: "40px 20px",
            width: "80%",
          }}
        >
          <AddressElement
            options={{ mode: "billing" }}
            onChange={(event) => {
              if (event.complete) {
                // Extract potentially complete address
                setAddress(event.value.address);
              }
            }}
          />
          <PaymentElement />
          <CTAButton
            disabled={isProcessing}
            text={isProcessing ? "Processing" : "Pay Now"}
            action={() => handleSubmit()}
          />
        </form>
      </VStack>
    </VStack>
  );
};

export default PaymentForm;
