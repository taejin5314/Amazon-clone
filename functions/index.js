const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
// const stripe = require('stripe')('Your stripe secret');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received, total amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})

exports.api = functions.https.onRequest(app);
