import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Checkout.css'
import CheckoutItem from './checkoutItem/CheckoutItem';
import Subtotal from './subtotal/Subtotal';
import { Link } from 'react-router-dom';
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""
                />

                {basket.length === 0 ?
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket is empty</h2>
                        <Link to='/'>
                            <button className="checkout__homeButton">Go back to shopping</button>
                        </Link>
                    </div>
                    : <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                    </div>
                }
                <FlipMove
                    leaveAnimation={{
                        from: {
                            transform: '',
                        },
                        to: {
                            transform: 'rotateX(-120deg)',
                            opacity: 0.1,
                        },
                    }}
                >
                    {basket?.map(item => (
                        <CheckoutItem
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    ))}
                </FlipMove>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
