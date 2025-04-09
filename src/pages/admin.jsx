import Discount from "../components/Discounts";
import ProductAdmin from "../components/ProductAdmin";
import "./admin.css";

function Admin(){


    return(
        <div className="admin">
            <h1> Store Administration</h1><br></br>
            <div className="parent">
                <section className="left">
                    <Discount></Discount>
                </section>
                <section className="right"> <ProductAdmin></ProductAdmin>
                </section>

        </div>
        </div>
    )

}

export default Admin;
