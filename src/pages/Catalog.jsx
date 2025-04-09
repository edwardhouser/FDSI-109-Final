import { use } from "react";
import Product from "../components/product";
import "./Catalog.css"
import DataService from "../services/DataService";

const mockData = [
    {
        "title" : "Monoammonium Phosphate",
        "price" : 99.50,
        "category" : "Phosphates",
        "image" : "/images/MAP.avif",
        "_id" : "00001",
    },
    {   "title" : "Monopotassium Phosphate",
        "price" : 120.00,
        "category" : "Phosphates",
        "image" : "/images/MKP.jpg",
        "_id" : "00002",
    },
    {   "title" : "Zinc Sulfate",
        "price" : 74.99,
        "category" : "Micros",
        "image" : "/images/zinc.jpg",
        "_id" : "00003",
    },
    {   "title" : "Manganese Sulfate",
        "price" : 59.00,
        "category" : "Micros",
        "image" : "/images/manganese.jpg",
        "_id" : "00004",
    },
    {   "title" : "Epsom Salt",
        "price" : 24.99,
        "category" : "Micros",
        "image" : "/images/epsom.webp",
        "_id" : "00005",
    },
    {   "title" : "Copper Sulfate",
        "price" : 124.99,
        "category" : "Micros",
        "image" : "/images/copper.png",
        "_id" : "00006",
    },
    {   "title" : "Boron 15",
        "price" : 35.00,
        "category" : "Micros",
        "image" : "/images/boron.webp",
        "_id" : "00007",
    }

]

const mockCategories = ["Phosphates", "Micros", "Specialty Chems"]

function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);


    async function loadProducts(){
        let prods = await DataService.getProducts();
        setProducts(prods);
    }
    async function loadCategories(){
        let cats = await DataService.getCategories();
        setCategories(cats);
    }

    useEffect( function () {
        //this will be called when the page is laoded
        loadProducts();
    }, [] );

    return(


    <div className="catalog">
        <h1> Our Products </h1>
        <div className="filters">
            {/* {mockCategories.map(cat => <button> {cat} </button>)} */}
            {categories.map(cat => <button> {cat} </button>)}
        </div>
            
        <div className="list"> 
             
            {/* //{mockData.map ( item => <Product key={item._id} data={item}></Product>)} */}
            {products.map ( item => <Product key={item._id} data={item}></Product>)}
        </div>
    </div>

    );
}

export default Catalog;

/** Map every categories from the mockCategory Array into buttons */

