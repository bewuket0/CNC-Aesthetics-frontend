import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Truck } from "lucide-react";
import { Package } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PriceDetail from "@/components/PriceDetail";
import { useStore } from "@/store/store";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const base_url = import.meta.env.VITE_BASE_URL;

const Checkout = () => {
  const [selected, setSelected] = useState("pickup");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptAgrement, setAcceptAgrement] = useState(false);

  const navigate = useNavigate();
  const createOrder = (payload) => {
    const create_order_url = `${base_url}/order/create`;
    return axios.post(create_order_url, payload, {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    });
  };
  const removeCartItems = useStore((state) => state.removeCartItems);

  const setDelivery = useStore((state) => state.setDelivery);
  const setDeliveryMethod = useStore((state) => state.setDeliveryMethod);

  const { mutate, isLoading } = useMutation({
    mutationFn: createOrder,

    onSuccess: () => {
      toast.success("Order placed successfully");
      // clearCart();
      navigate("/success");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setAcceptAgrement(false);
      removeCartItems();
    },
    onError: (error) => {
      console.log("error = ", error);
      let errorMessage =
        error?.response?.data?.message || "Failed to place order";
      toast.error(errorMessage);
      return;
    },
  });

  useEffect(() => {
    setDeliveryMethod(selected === "delivery");
  }, [selected, setDeliveryMethod]);
  ("9");
  const handleOrder = () => {
    // e.preventDefault();

    try {
      if (!firstName || !lastName) {
        toast.error("fill in you full name");
        return;
      }
      if (!email) {
        toast.error("invalid email address");
        return;
      }

      // let valid = ["9", "7"].includes(phoneNumber[0]);

      // if (!phoneNumber || phoneNumber.length != 9 || !valid) {
      let validPhone = /^[97]\d{8}$/.test(phoneNumber);
      if (!validPhone) {
        toast.error("Invalid phone number");
        return;
      }

      const preparedData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: `+251${phoneNumber}`,
        email: email,
        with_delivery: selected === "delivery",
        product_list: [
          {
            product_id: "6790a151fd46990287cef730",
            quantity: 2,
          },
        ],
      };
      console.log("prepared data => ", preparedData);

      mutate(preparedData);
    } catch (error) {
      toast.error("something went wrong");
      return;
    }
  };
  console.log("selected", selected);

  return (
    <div>
      <div className="mx-auto my-10 w-3/4 p-10">
        {" "}
        {/* bg-white */}
        <h2 className="pb-2 text-4xl">Checkout</h2>
        <div className="flex space-x-5">
          <div className="w-2/3 bg-white p-10">
            <div className="space-y-7">
              <div>
                <h2 className="mb-2">Shipping Method</h2>

                <div className="flex">
                  <RadioGroup
                    defaultValue={selected}
                    onValueChange={setSelected}
                    // className="space-y-2"
                    className="flex"
                  >
                    {["pickup", "delivery"].map((option) => (
                      <div
                        key={option}
                        className={`flex  cursor-pointer  space-x-2 border px-4 py-2 transition-all duration-500 hover:border-sky-500 hover:text-sky-600  
            ${selected === option ? "border-sky-600 text-sky-600" : ""}`}
                      >
                        <RadioGroupItem
                          value={option}
                          id={option}
                          className="border-sky-600 text-sky-600"
                        />
                        <Label htmlFor={option} className="cursor-pointer">
                          {/* {option.replace("-", " ")}{" "} */}
                          {option == "delivery" ? (
                            <div className="flex items-center">
                              {" "}
                              <Truck size={21} />
                              <span>Delivery</span>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <Package size={21} />
                              <span>Pick Up</span>
                            </div>
                          )}
                          {/* Formatting label text */}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
              <div className="flex justify-between space-x-5">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    type="email"
                    id="firstName"
                    placeholder="Joe"
                    // className="w-full rounded border border-gray-300 py-2 text-gray-700 outline-none ring-0 focus:outline-none focus:ring-0"

                    className="!important w-full rounded border border-gray-300 py-2 text-gray-700 outline-none ring-0 focus:border-sky-600 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    type="email"
                    id="lastName"
                    placeholder="Doe"
                    className="!important w-full rounded border border-gray-300 py-2 text-gray-700 outline-none ring-0 focus:border-sky-600 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  id="email"
                  placeholder="john@gmail.com"
                  className="!important w-full rounded border border-gray-300 py-2 text-gray-700 outline-none ring-0 focus:border-sky-600 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-y-0 left-3 flex items-center space-x-2">
                    {/* Ethiopian Flag */}
                    <img
                      src="https://flagcdn.com/w40/et.png"
                      alt="Ethiopia Flag"
                      className="h-4 w-6"
                    />
                    {/* Country Code */}
                    <span className="text-sm text-gray-700">+251</span>
                  </div>

                  <input
                    type="text"
                    maxLength="9"
                    value={phoneNumber}
                    onChange={(e) =>
                      setPhoneNumber(e.target.value.replace(/\D/, ""))
                    } // Only allow numbers
                    placeholder="Enter Your Phone Number"
                    className="w-full rounded border border-gray-300 py-2 pl-20 pr-3 text-gray-700 outline-none focus:border-sky-700"
                  />
                </div>
              </div>
              {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="phone">Phone Number</Label>

                <Input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type="test"
                  id="phone"
                  placeholder="+251911111111"
                />
              </div> */}

              <div className="items-top flex space-x-2 pt-5">
                <Checkbox
                  id="accept"
                  checked={acceptAgrement}
                  onCheckedChange={(checked) => setAcceptAgrement(checked)}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="accept"
                    className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                  <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
              <div className="py-10">
                <button
                  disabled={!acceptAgrement}
                  onClick={handleOrder}
                  className="w-2/4 rounded border bg-sky-700 px-4 py-2 text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-sky-500"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
          <div className="w-96 border p-5">
            <div className="m-3">
              {/* <h2>Order Summary</h2> */}

              <PriceDetail title={"Order Summery"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
