import React from 'react';

function CartProduct(props) {
    return (
        <div className="media product">
            <div className="media-left">
                <a href="shopingcart/src/components/cartComponents/ListProduct#">
                    <img
                        className="media-object"
                        src="images/pizza.jpg"
                        alt="pizza"
                    />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">Pizza</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam magnam
                    magni ut deleniti!
                </p>
                <input
                    name="quantity-product-1"
                    type="number"
                    defaultValue={1}
                    min={1}
                />
                <a data-product={1} href="shopingcart/src/components/cartComponents/ListProduct#" className="price">
                    {" "}
                    12 USD{" "}
                </a>
            </div>
        </div>
    );
}

export default CartProduct;