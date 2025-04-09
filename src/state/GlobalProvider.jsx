import DataContext from "./datacontext";
import { useState } from "react";


function GlobalProvider(props){

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({
        name: "Ed Houser",
        email: "edward.houser@sdgku.edu",
        password: "123",
        address: "456 Main St.",
    });
    
    function addProdToCart(item){
        console.log ("Global Provider Added to Shopping Cart")
        let copy = [...cart];
        copy.push(item);
        setCart(copy);
    }
    
    function removeProdFromCart(){}
    
    function clearCart(){}

    return(
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
            clearCart: clearCart
        }}>
            {props.children} 
        </DataContext.Provider> 

    )

}

export default GlobalProvider;
