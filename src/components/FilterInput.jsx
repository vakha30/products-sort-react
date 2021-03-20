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

class FilterInput extends React.Component {

    handleChange = (e) => {
        if (e.target.name === "search") {
            this.props.onInputSearch(e.target.value)
        }
        if (e.target.name === "instock") {
            this.props.onInputCheckbox(e.target.checked)
        }
        if (e.target.name === "manufacturer") {
            this.props.onInputSelectManufacturer(e.target.value)
        }
        if (e.target.name === "model") {
            this.props.onInputSelectModel(e.target.value)
        }
        if (e.target.name === "minprice") {
            this.props.onInputMinPrice(e.target.value)
        }
        if (e.target.name === "maxprice") {
            this.props.onInputMaxPrice(e.target.value)
        }

    }

    getManufacturers = (products) => {
        let newProductsArray =[];
        let last = null;
        products.forEach((item) => {
            if (last !== item.manufacturer) {
                newProductsArray.push(item.manufacturer)
            }
            last = item.manufacturer
        })
        return newProductsArray;
    }

    getModels = (products, manufacturer) => {
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

    render() {
        const {inStock, searchValue, manufacturerSelect, modelSelect, minPrice, maxPrice} = this.props;
        const {products} = this.props;
        const productsManufacturer = this.getManufacturers(products.phones.slice());
        const productsManufacturerOptions = productsManufacturer.map((item, index) =>
            <OptionSelect key={item} data={item} />
        )
        const productsModel = this.getModels(products.phones.slice(), manufacturerSelect);



        const productsModelOptions = productsModel.map((item, index) =>
            <OptionSelect key={item} data={item} />
        )

        return (
            <div style={style.filterInputWrap}>
                <div style={{marginBottom: "10px"}}>
                    <input name="search" onChange={this.handleChange} value={searchValue} style={style.searchInput} placeholder="Поиск товара..."/>
                </div>

                <div style={{marginBottom: "10px"}}>
                    <input name="instock" onChange={this.handleChange} checked={inStock} type="checkbox"/> - Только в наличии
                </div>

                <div style={{marginBottom: "20px"}}>
                    <p>Производитель</p>
                    <select name="manufacturer" onChange={this.handleChange} value={manufacturerSelect} style={style.selectInput}>
                        <option value="all">Все</option>
                        {productsManufacturerOptions}
                    </select>
                </div>

                <div style={{marginBottom: "20px", display: manufacturerSelect !== 'all' ? 'block' : 'none'}}>
                    <p>Модель</p>
                    <select name="model" onChange={this.handleChange} value={modelSelect} style={style.selectInput}>
                        <option value="all">Все</option>
                        {productsModelOptions}
                    </select>
                </div>

                <div>
                    <p>Стоимость От - До</p>
                    <input name="minprice" onChange={this.handleChange} value={minPrice} placeholder="От" style={style.searchPriceInput}/>
                    <input name="maxprice" onChange={this.handleChange} value={maxPrice} placeholder="До" style={style.searchPriceInput}/>
                </div>

            </div>
        )
    }
}

export default FilterInput;