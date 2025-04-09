import "./thankyou.css";
import { Link } from "react-router-dom";

function ThankYou() {
    return (
        <div className="thankyou">
            <h1>Thank You!</h1>
            <p>Your order has been placed successfully.</p>
            <p>We appreciate your business!</p>
            <Link to='/Catalog'> Return to Catalog </Link>
        </div>
    );
}

export default ThankYou;
