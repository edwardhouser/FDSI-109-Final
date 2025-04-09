import { useContext } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import DataContext from "../state/datacontext";

function Navbar(){

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    function getNumofProds(){
        //sum the quanities of the products in the cart
        let sum = 0;
        for (let i = 0; i < cart.length; i++){
            const prod = cart[i];
            sum += prod.quantity;
            // same as sum = sum + prod.quantity;
        }
        return sum;
    }


    return (
        <div className="navbar">
            <span className="title"> Organika Fertilizers </span>
            <ul>
                <li><Link to='/Home'> Home </Link> </li>
                <li><Link to='/Catalog'> Catalog </Link></li>
                <li><Link to='/Admin'> Admin </Link> </li>
                <li><Link to='/Cart'> {getNumofProds()} <i className="fa-solid fa-cart-shopping"></i> </Link> </li>
                
                <button className="btn btn-outline-dark"> <i className="fa-regular fa-circle-user"></i>
                    {user.name} </button>
            </ul>
        </div>
    );
}

export default Navbar;
