const style = {
    productWrap: {
        display: "flex",
        borderBottom: "1px solid #d9d9d9",
        padding: "10px",
        margin: "0 0 20px 0"
    },
    productInfoWrap: {
        paddingTop: "20px"
    },
    productInfo: {
        width: "300px",
        display: "flex",
        marginBottom: "20px"
    },
    productInfoLeft: {
        flex: "0 1 130px",
        color: "#767676"
    },
    productInfoRight: {
        flex: "0 1 100px"
    },
    productLeft: {
        flex: "1 1 70%"
    },
    productRight: {
        flex: "0 1 25%"
    }
}

function ProductItem(props) {
    const {product} = props
    return (
        <div style={style.productWrap}>
            <div style={style.productLeft}>
                <h2 style={{fontSize: "21px", fontWeight: "normal"}}>{product.name}</h2>
                <div style={style.productInfoWrap}>
                    <div style={style.productInfo}>
                        <p style={style.productInfoLeft}>Объем памяти</p>
                        <p style={style.productInfoRight}>{product.memory} ГБ</p>
                    </div>
                    <div style={style.productInfo}>
                        <p style={style.productInfoLeft}>Экран</p>
                        <p style={style.productInfoRight}>{product.display} дюйм</p>
                    </div>
                </div>
            </div>
            <div style={style.productRight}>
                <p style={{fontSize: "30px"}}>{product.price} p</p>
            </div>
        </div>
    )
}

export default ProductItem;
