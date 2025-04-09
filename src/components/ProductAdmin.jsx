import "./ProductAdmin.css"
import { useState } from "react";

function ProductAdmin(){

    const [product, setProduct] = useState({
        title: "",
        price: "",
        imageUrl: "",
        category: ""
    });
    function handleProduct(event){
        let copy = {...product};
        const text = event.target.value;
        const name = event.target.name;
        copy[name] = text;
        setProduct(copy);
        console.log(copy);
    }

    function save(){
        console.log(product);
    }

    return(
        <div className="prod-admin">
            <h3> New Product </h3>
            <div className="form-field">
                <label className="form-label"> Title </label>
                <input className="form-control" type="text" onBlur={handleProduct} name="title"></input>
            </div>
            <div className="form-field">
                <label className="form-label"> Price: </label>
                <input className="form-control" type="text" onBlur={handleProduct} name="price"></input>
            </div>
            <div className="form-field">
                <label className="form-label"> Image Url </label>
                <input className="form-control" type="text" onBlur={handleProduct} name="imgUrl"></input>
            </div>
            <div className="form-field">
                <label className="form-label"> Category </label>
                <input className="form-control" type="text" onBlur={handleProduct} name="category"></input>
            </div>
            <button className="btn btn-sm btn-primary" onClick={save}> Save </button>
        </div>

    )


}

export default ProductAdmin;
