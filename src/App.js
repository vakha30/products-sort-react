import ProductsPage from "./components/ProductsPage";
import './App.css';
const products = {
    phones: [
        {id: 1, category: "Сматртфоны", name: "Смартфон Samsung Galaxy A51 128GB", manufacturer: "Samsung", model: "Galaxy A51", memory: "128", display: "6.50 дюйм", price: "22990", inStock: true, discount: false},
        {id: 2, category: "Сматртфоны", name: "Смартфон Samsung Galaxy A51 64GB", manufacturer: "Samsung", model: "Galaxy A51", memory: "64", display: "6.50 дюйм", price: "19490", inStock: true, discount: true},
        {id: 3, category: "Сматртфоны", name: "Смартфон Samsung Galaxy A51 32GB", manufacturer: "Samsung", model: "Galaxy A51", memory: "32", display: "6.50 дюйм", price: "13990", inStock: false, discount: false},
        {id: 4, category: "Сматртфоны", name: "Смартфон Samsung Galaxy A20s 32GB", manufacturer: "Samsung", model: "Galaxy A20s", memory: "32", display: "6.50 дюйм", price: "11990", inStock: true, discount: false},
        {id: 5, category: "Сматртфоны", name: "Смартфон Samsung Galaxy A12 32GB", manufacturer: "Samsung", model: "Galaxy A12", memory: "32", display: "6.50 дюйм", price: "11990", inStock: true, discount: false},
        {id: 6, category: "Сматртфоны", name: "Смартфон Samsung Galaxy A12 64GB", manufacturer: "Samsung", model: "Galaxy A12", memory: "64", display: "6.50 дюйм", price: "12990", inStock: true, discount: true},
        {id: 7, category: "Сматртфоны", name: "Смартфон Samsung Galaxy Note 10 256GB", manufacturer: "Samsung", model: "Galaxy Note 10", memory: "256", display: "6.3 дюйм", price: "44990", inStock: true, discount: false},
        {id: 8, category: "Сматртфоны", name: "Смартфон Honor 20S 128GB Midnight Black", manufacturer: "Honor", model: "20S", memory: "128", display: "6.15 дюйм", price: "16990", inStock: true, discount: false},
        {id: 9, category: "Сматртфоны", name: "Смартфон Honor 20S 128GB Peacock Blue", manufacturer: "Honor", model: "20S", memory: "128", display: "6.15 дюйм", price: "16990", inStock: true, discount: true},
        {id: 10, category: "Сматртфоны", name: "Смартфон Honor 9X 128GB Sapphire Blue", manufacturer: "Honor", model: "9X", memory: "128", display: "6.59 дюйм", price: "15990", inStock: true, discount: false},

        {id: 11, category: "Сматртфоны", name: "Смартфон Apple iPhone XR 128GB (2020) Коралловый", manufacturer: "Apple", model: "iPhone XR", memory: "128GB", display: "6.1 дюйм", price: "48790", inStock: true, discount: false},
        {id: 12, category: "Сматртфоны", name: "Смартфон Apple iPhone XR 64GB (2020) Жёлтый", manufacturer: "Apple", model: "iPhone XR", memory: "64GB", display: "6.1 дюйм", price: "44590", inStock: true, discount: true},
        {id: 13, category: "Сматртфоны", name: "Смартфон Apple iPhone XR 64GB (2020) Жёлтый", manufacturer: "Apple", model: "iPhone XR", memory: "64GB", display: "6.1 дюйм", price: "44590", inStock: true, discount: false},
    ],
    looptops: [
        {id: 1, manufacturer: "Acer", model: "h1234hfd", price: "28999"},
        {id: 2, manufacturer: "Samsung", model: "G23HT", price: "35999"},
        {id: 3, manufacturer: "LENOVO", model: "Asp657", price: "16999"}
    ],

}


function App() {

    return (
        <div>
            <ProductsPage products={products} />
        </div>
    );
}

export default App;
