// import { create } from "zustand";
// import { createUserSlice } from "./userSlice";

import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const store = (set: any) => ({
  cartItems: [
    {
      id: 1,
      productName: "Wooden wall art and signs",
      productImage: "/assets/photo_2022-07-07_22-35-52.jpg",
      state: "PLANNED",
      discount: 10,
      quantity: 2,
      price: 5,
    },
    {
      id: 2,
      productName: "Picture frames",
      productImage: "/assets/custoemr-engravings.png",
      state: "ONGOING",
      quantity: 5,
      price: 200,
    },
    {
      id: 3,
      productName: "Decorative panels",
      productImage: "/assets/download (3).png",
      state: "ONGOING",
      quantity: 3,
      price: 140,
    },
    {
      id: 4,
      productName: "Key holders with custom names",
      productImage: "/assets/photo_2024-11-07_14-19-423.jpg",
      state: "DONE",
      quantity: 7,
      price: 190,
    },
  ],
  //   addTask: ({ productName, state, id }) =>
  //     set((store: any) => ({
  //       tasks: [...store.tasks, { productName, state, id }],
  //     })),
  removeTasks: () => set({ tasks: [] }),
});

export const useStore = create(store);
