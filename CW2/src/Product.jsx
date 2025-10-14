import React from "react"

function Product ({title, price, inStock, description, rating, tags}) {
    const hasSale = tags.includes("Sale");
    const finalPrice = hasSale ? price * 0.9 : price;
    const renderStars = (count) => "⭐". repeat(count);

    return (
        <div style = {{border: "1px solid gray", padding: "10px", margin: "10px", borderRadius: "10px"}}>
            <h2>{title}</h2>
            <p>{description}</p>
            {inStock ? (
                <p>{hasSale && <span style = {{ textDecoration: "line-through", marginRight: "10px"}}>{price}₸</span>}<strong>{finalPrice}₸</strong></p>
            ) : (
                <p style = {{color: "red"}}>Out of Stock</p>
            )}
            <p>{renderStars(rating)}</p>
            <p>Tags: {tags.join(", ")}</p>
        </div>
    );
}

export default Product;