import React from 'react';
import ListProduct from "./ListProduct";
import ListCart from "./ListCart";

function Cart(props) {
    return (
        <div className="container">
            {/* TITLE : START */}
            <div className="page-header">
                <h1>
                    Project 04 - Shopping Cart <small>ReactJS</small>
                </h1>
            </div>
            {/* TITLE : END */}
            <div className="row">
                {/* LIST PRODUCT : START */}
<ListProduct/>
                {/* LIST PRODUCT : END */}
                {/* CART : START */}
                <ListCart/>
                {/* CART : END */}
            </div>
        </div>

    );
}

export default Cart;