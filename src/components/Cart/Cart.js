import React from "react";

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    let shipping = 0;
    if (total > 350) {
        shipping = 0;
    } else if (total > 150) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 15;
    }
    const tax = total / 10;
    const grandTotal = total + shipping + tax;
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    };
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {formatNumber(total)}</p>
            <p>Shipping Cost: {shipping} </p>
            <p>Tax: {formatNumber(tax)}</p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;
