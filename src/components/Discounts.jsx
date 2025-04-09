import "./Discounts.css"
import { useState } from "react";
function Discount(){
    const [coupon, setCoupon] = useState({
        code: "",
        amount: "",

    });


    function save(){
        console.log("saving discount");
    }
    function handleCoupon(event){
        // 3 steps to modify state var: create copy, modify copy, set state
        const text = event.target.value;
        const name = event.target.name;
        //long way
        /*let copy = {...coupon};
        if (name == "code"){
            copy['code'] = text;
            setCoupon(copy);  
        } else if (name == "amount"){
            copy['amount'] = text; }
            setCoupon(copy); */
        //short way
        let copy = {...coupon};
        copy[name] = text;
        setCoupon(copy);
        console.log(copy);
        
        
    }


    return(
        <div className="discounts">
            <h3> Discount Code </h3>
            <div className="form-field">
                <label className="form-label"> Code </label>
                <input className="form-control" type="text" onBlur={handleCoupon} name="code"></input>
            </div>
            <div className="form-field">
                <label className="form-label"> Discount: </label>
                <input className="form-control" type="text" onBlur={handleCoupon} name="amount"></input>
            </div>
            <button className="btn btn-sm btn-primary" onClick={save}> Save </button>
        </div>

    )


}

export default Discount;
