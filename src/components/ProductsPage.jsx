import React from "react";
import FilterInput from "./FilterInput";
import ProductsShow from "./ProductsShow";

const style = {
    productPageWrap: {
        display: "flex"
    }
}

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inStock: false,
            searchValue: '',
            manufacturerSelect: 'all',
            modelSelect: 'all',
            minPrice: '',
            maxPrice: ''
        }
    }

    onInputSearch = (value) => {
        this.setState({
            searchValue: value
        })
    }

    onInputCheckbox = (value) => {
        this.setState({
            inStock: value
        })
    }

    onInputSelectManufacturer = (value) => {
        this.setState({
            modelSelect: 'all',
            manufacturerSelect: value
        })
    }

    onInputSelectModel = (value) => {
        this.setState({
            modelSelect: value
        })
    }

    onInputMinPrice = (value) => {
        this.setState({
            minPrice: value
        })
    }

    onInputMaxPrice = (value) => {
        this.setState({
            maxPrice: value
        })
    }

    render() {
        const products = this.props.products;
        const {inStock, searchValue, manufacturerSelect, modelSelect, minPrice, maxPrice} = this.state
        return (
            <div style={style.productPageWrap}>
                <FilterInput
                    inStock={inStock}
                    searchValue={searchValue}
                    manufacturerSelect={manufacturerSelect}
                    modelSelect={modelSelect}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    products={products}
                    onInputSearch={this.onInputSearch}
                    onInputCheckbox={this.onInputCheckbox}
                    onInputSelectManufacturer={this.onInputSelectManufacturer}
                    onInputSelectModel={this.onInputSelectModel}
                    onInputMinPrice={this.onInputMinPrice}
                    onInputMaxPrice={this.onInputMaxPrice}
                />
                <ProductsShow
                    products={products}
                    searchValue={searchValue}
                    inStock={inStock}
                    manufacturerSelect={manufacturerSelect}
                    modelSelect={modelSelect}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                />
            </div>
        )
    }
}

export default ProductsPage;