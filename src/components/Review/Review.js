import React, { useEffect, useState } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../Reviewitem/Reviewitem";
const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map((key) => {
            const product = fakeData.find((pd) => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);
    return (
        <div>
            <h1>Items ordered: {cart.length}</h1>
            {cart.map((pd) => (
                <ReviewItem key={pd.key} product={pd}></ReviewItem>
            ))}
        </div>
    );
};

export default Review;
