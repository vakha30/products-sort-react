import React from "react";
import FilterInput from "./FilterInput";
import ProductsShow from "./ProductsShow";

const style = {
    productPageWrap: {
        display: "flex"
    }
}

function ProductsPage({phones}) {
    const [inStock, setInStock] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')
    const [manufacturerSelect, setManufacturerSelect] = React.useState('all')
    const [modelSelect, setModelSelect] = React.useState('all')
    const [minPrice, setMinPrice] = React.useState('')
    const [maxPrice, setMaxPrice] = React.useState('')
    
    const onInputSearch = (value) => {
        setSearchValue(value)
    }

    const onInputCheckbox = (value) => {
        setInStock(value)
    }

    const onInputSelectManufacturer = (value) => {
        setModelSelect('all')
        setManufacturerSelect(value)
    }

    const onInputSelectModel = (value) => {
        setModelSelect(value)
    }

    const onInputMinPrice = (value) => {
        setMinPrice(value)
    }

    const onInputMaxPrice = (value) => {
        setMaxPrice(value)
    }

    return (
        <div style={style.productPageWrap}>
            <FilterInput
                inStock={inStock}
                searchValue={searchValue}
                manufacturerSelect={manufacturerSelect}
                modelSelect={modelSelect}
                minPrice={minPrice}
                maxPrice={maxPrice}
                phones={phones}
                onInputSearch={onInputSearch}
                onInputCheckbox={onInputCheckbox}
                onInputSelectManufacturer={onInputSelectManufacturer}
                onInputSelectModel={onInputSelectModel}
                onInputMinPrice={onInputMinPrice}
                onInputMaxPrice={onInputMaxPrice}
            />
            <ProductsShow
                phones={phones}
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

export default ProductsPage;