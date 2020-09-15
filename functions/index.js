const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HPvZaCbdBPojIDJRw8go9MzA7imyEgLwWDBVUcYYkYfhZuMfk5P2POV0yzp7qX38aiW7isSn7TqRUbbgYSBdytY00PoMEM63h');

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