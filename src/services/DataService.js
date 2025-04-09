import axios from 'axios';


class DataService(){
    getProducts(){
        let response = await axios.get("http://127.0.0.1:5000/api/products")
        return response.data;
    }
}

export default new DataService();