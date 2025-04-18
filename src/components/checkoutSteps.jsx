import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const CheckoutSteps = () => {
  const [step, setStep] = useState("shipping");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    shippingMethod: "delivery",
    acceptTerms: false,
  });

  const handleNext = (nextStep) => {
    if (!formData.firstName || !formData.lastName) {
      toast.error("Please enter your full name");
      return;
    }
    if (!formData.email.includes("@")) {
      toast.error("Enter a valid email address");
      return;
    }
    setStep(nextStep);
  };

  return (
    <div className="mx-auto my-10 w-3/4 rounded-lg bg-white p-10 shadow-md">
      <h2 className="pb-4 text-3xl">Checkout</h2>

      <Tabs value={step} onValueChange={setStep}>
        <TabsList className="grid w-full grid-cols-3 rounded-md bg-gray-100 p-2">
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
        </TabsList>

        {/* Step 1: Shipping Information */}
        <TabsContent value="shipping">
          <div className="space-y-5 p-5">
            <h3 className="text-lg font-semibold">Shipping Information</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <Button className="mt-4" onClick={() => handleNext("payment")}>
              Next: Payment
            </Button>
          </div>
        </TabsContent>

        {/* Step 2: Payment Information */}
        <TabsContent value="payment">
          <div className="space-y-5 p-5">
            <h3 className="text-lg font-semibold">Payment Details</h3>

            <div>
              <Label>Card Number</Label>
              <Input placeholder="1234 5678 9012 3456" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Expiry Date</Label>
                <Input placeholder="MM/YY" />
              </div>
              <div>
                <Label>CVV</Label>
                <Input placeholder="123" type="password" />
              </div>
            </div>

            <Button className="mt-4" onClick={() => setStep("review")}>
              Next: Review
            </Button>
          </div>
        </TabsContent>

        {/* Step 3: Review Order */}
        <TabsContent value="review">
          <div className="space-y-5 p-5">
            <h3 className="text-lg font-semibold">Review & Confirm</h3>

            <p>
              <strong>Name:</strong> {formData.firstName} {formData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Shipping Method:</strong>{" "}
              {formData.shippingMethod === "delivery" ? "Delivery" : "Pickup"}
            </p>

            <Button className="mt-4 w-full bg-green-600 hover:bg-green-500">
              Place Order
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CheckoutSteps;
