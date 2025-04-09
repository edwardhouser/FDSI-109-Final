import "./Cart.css"
import { useContext } from "react";
import DataContext from "../state/datacontext";
import { Link } from "react-router-dom";

function Cart(){
    
    const cart = useContext(DataContext).cart;

    return(
        <div className="cart">
            <h1> Your Shopping Cart </h1>

        {cart.length === 0 ? <h3> Your Cart is Empty</h3> : null }

            <div className="parent">
                <div className="prod-list">
                    {cart.map( prod => 
                        <div className="prod-item" key={prod.id}>
                            <img src={prod.image} alt={prod.title}></img>
                            <h5> {prod.title} </h5>
                            <h6> Quantity: {prod.quantity} </h6>
                            <h6> Price: $ {(prod.price * prod.quantity).toFixed(2)} </h6>
                            <button className="btn btn-sm btn-danger"> Remove from Cart </button>
                        </div>
                    )}

                </div>
                <div className="total">
                    <h4> Complete your Order Here </h4>
                    <h2> Total </h2>
                    <h2> $ {cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0).toFixed(2)} </h2>
                    <button className="btn btn-lg btn-success"> <Link to='/Thankyou'> Checkout </Link>  </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;