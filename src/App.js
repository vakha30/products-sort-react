import ProductsPage from "./components/ProductsPage";
import axios from 'axios'

import './App.css';
import React from "react";



function App() {

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(({data}) => {
            setProducts(data.phones)
        })
    }, [])
    
    return (
        <div>
            <ProductsPage phones={products} />
        </div>
    );
}

export default App;
