import React from 'react';
import './CheckoutItem.css'

function CheckoutItem({ id, title, image, price, rating }) {

    return (
        <div className="checkoutItem">
            <div className="checkoutItem__left">
                <img src={image} alt="" />
            </div>

            <div className="checkoutItem__right">
                <p className="checkoutItem__title">
                    {title}
                </p>
                <p className="checkoutItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutItem__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>★</p>
                        ))}
                </div>

                <button>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutItem
