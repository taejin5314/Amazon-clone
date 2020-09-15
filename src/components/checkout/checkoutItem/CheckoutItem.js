import React, { forwardRef } from 'react';
import { useStateValue } from '../../../StateProvider';
import './CheckoutItem.css'


const CheckoutItem = forwardRef(({ id, title, image, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutItem" ref={ref}>
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
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}
            </div>
        </div>
    )
})

export default CheckoutItem
