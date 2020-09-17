import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../StateProvider';
import Order from './order/Order';
import './Orders.css'
import { db } from '../../firebase';

function Orders() {
    const [{ user, disable }, dispatch] = useStateValue();
    const [Orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([]);
        }
    }, [user])

    return (
        <div className={disable ? "orders disable" : "orders"}>
            <h1>Your Orders</h1>

            <div className="orders__order">
                {Orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
