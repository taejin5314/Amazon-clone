import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Checkout.css'
import CheckoutItem from './checkoutItem/CheckoutItem';
import Subtotal from './subtotal/Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""
                />

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>

                {basket?.map(item => (
                    <CheckoutItem
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                    />
                ))}
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
