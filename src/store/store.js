import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const store = (set) => ({
  cartItems: [
    // {
    //   id: 1,
    //   productName: "Wooden wall art and signs",
    //   productImage: "/assets/photo_2022-07-07_22-35-52.jpg",
    //   discount: 10,
    //   quantity: 2,
    //   price: 5,
    // },
    // {
    //   id: 2,
    //   productName: "Picture frames",
    //   productImage: "/assets/custoemr-engravings.png",
    //   quantity: 5,
    //   price: 200,
    // },
    // {
    //   id: 3,
    //   productName: "Decorative panels",
    //   productImage: "/assets/download (3).png",
    //   quantity: 3,
    //   price: 140,
    // },
    // {
    //   id: 4,
    //   productName: "Key holders with custom names",
    //   productImage: "/assets/photo_2024-11-07_14-19-423.jpg",
    //   quantity: 7,
    //   price: 190,
    // },
  ],
  //   addTask: ({ productName, state, id }) =>
  //     set((store) => ({
  //       tasks: [...store.tasks, { productName, state, id }],
  //     })),
  removeCartItems: () => set({ cartItems: [] }),

  deleteCartItem: ({ id }) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  addCartItem: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, { ...item, id: uuidv4() }],
    })),
  incrementQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decrementQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0), // Remove item if quantity becomes 0
    })),
});

export const useStore = create(store);
