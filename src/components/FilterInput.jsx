import React from "react";
import OptionSelect from "./OptionSelect";

const style = {
    filterInputWrap: {
        padding: "20px"
    },
    searchInput: {
        border: "1px solid hsla(0,0%,67%,.45)",
        borderRadius: "3px",
        width: "100%",
        height: "30px",
        paddingLeft: "15px"
    },
    searchPriceInput: {
        width: "90px",
        height: "35px",
        marginRight: "20px",
        paddingLeft: "15px"
    },
    selectInput: {
        width: "200px",
        height: "30px"
    }
}

function FilterInput(props) {

    const { inStock, searchValue, manufacturerSelect, modelSelect, minPrice, maxPrice } = props;
    const { phones } = props;
    
    

    const handleChange = (e) => {
        if (e.target.name === "search") {
            props.onInputSearch(e.target.value)
        }
        if (e.target.name === "instock") {
            props.onInputCheckbox(e.target.checked)
        }
        if (e.target.name === "manufacturer") {
            props.onInputSelectManufacturer(e.target.value)
        }
        if (e.target.name === "model") {
            props.onInputSelectModel(e.target.value)
        }
        if (e.target.name === "minprice") {
            props.onInputMinPrice(e.target.value)
        }
        if (e.target.name === "maxprice") {
            props.onInputMaxPrice(e.target.value)
        }

    }

    const getManufacturers = (products) => {
        let newProductsArray = [];
        let last = null;
        products.forEach((item) => {
            if (last !== item.manufacturer) {
                newProductsArray.push(item.manufacturer)
            }
            last = item.manufacturer
        })
        return newProductsArray;
    }

    const getModels = (products, manufacturer) => {
        let newProductsArray = [];
        let last = null;
        products.forEach((item) => {
            if (last !== item.model && item.manufacturer === manufacturer) {
                newProductsArray.push(item.model)
            }
            last = item.model
        })
        return newProductsArray;
    }

    const productsModel = getModels(phones, manufacturerSelect);
    const productsManufacturer = getManufacturers(phones);
    const productsManufacturerOptions = productsManufacturer.map((item, index) =>
        <OptionSelect key={item} data={item} />
    )
    const productsModelOptions = productsModel.map((item, index) =>
        <OptionSelect key={item} data={item} />
    )
    
    return (
        <div style={style.filterInputWrap}>
            <div style={{ marginBottom: "10px" }}>
                <input name="search" onChange={handleChange} value={searchValue} style={style.searchInput} placeholder="Поиск товара..." />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <input name="instock" onChange={handleChange} checked={inStock} type="checkbox" /> - Только в наличии
                </div>

            <div style={{ marginBottom: "20px" }}>
                <p>Производитель</p>
                <select name="manufacturer" onChange={handleChange} value={manufacturerSelect} style={style.selectInput}>
                    <option value="all">Все</option>
                    {productsManufacturerOptions}
                </select>
            </div>

            <div style={{ marginBottom: "20px", display: manufacturerSelect !== 'all' ? 'block' : 'none' }}>
                <p>Модель</p>
                <select name="model" onChange={handleChange} value={modelSelect} style={style.selectInput}>
                    <option value="all">Все</option>
                    {productsModelOptions}
                </select>
            </div>

            <div>
                <p>Стоимость От - До</p>
                <input name="minprice" onChange={handleChange} value={minPrice} placeholder="От" style={style.searchPriceInput} />
                <input name="maxprice" onChange={handleChange} value={maxPrice} placeholder="До" style={style.searchPriceInput} />
            </div>

        </div>
    )
}

export default FilterInput;