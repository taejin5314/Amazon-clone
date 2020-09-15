import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import CheckoutItem from '../checkout/checkoutItem/CheckoutItem';
import './Payment.css';
import FlipMove from 'react-flip-move';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = e => {

    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.displayName}</p>
                        <p>5000 Yonge St.</p>
                        <p>Toronto, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
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
                            {basket.map(item => (
                                <CheckoutItem
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </FlipMove>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
