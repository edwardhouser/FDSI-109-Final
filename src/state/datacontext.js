import { createContext } from "react";

// context is an interface, no implementation here
// it is a way to share data between components
// without passing props down manually at every level


const DataContext = createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {},
    clearCart: () => {},
});
export default DataContext;