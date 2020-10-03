import React from "react";

const Reviewitem = (props) => {
    const { name, quantity } = props.product;
    const reviewItemStyle = {
        borderBottom: "1px solid lightgray",
        marginBottom: "10px",
        padding: "20px 50px 50px",
    };
    return (
        <div style={reviewItemStyle}>
            <h3 style={{ color: "blue" }}>{name}</h3>
            <p>Quantity: {quantity}</p>
            <button className="main-button">Review Item</button>
        </div>
    );
};

export default Reviewitem;
