import ProductItem from "./ProductItem";

const style = {
    productsShowWrap: {
        padding: "0 0 0 50px"
    }
}

function ProductsShow(props) {
    const {products, searchValue, inStock, manufacturerSelect, modelSelect, minPrice, maxPrice} = props;

    let filterProducts = products.phones.filter((item) =>
        item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    )

    if (inStock) {
        filterProducts = filterProducts.filter((item) =>
            item.inStock === inStock
        )
    }
    if (manufacturerSelect !== 'all') {
        filterProducts = filterProducts.filter((item) =>
            item.manufacturer === manufacturerSelect
        )
    }

    if (modelSelect !== 'all' && manufacturerSelect !== 'all') {
        filterProducts = filterProducts.filter((item) =>
            item.model === modelSelect
        )
    }

    if (maxPrice !== '') {
        filterProducts = filterProducts.filter((item) =>
            Number(item.price) < maxPrice
        )
    }

    filterProducts = filterProducts.filter((item) =>
        Number(item.price) > minPrice
    )


    const productItems = filterProducts.map((item) =>
        <ProductItem
            key={item.id}
            product={item}
        />
    )
    return (
        <div style={style.productsShowWrap}>
            {productItems}
        </div>
    )
}

export default ProductsShow;