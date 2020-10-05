# Project Name: Amazon Clone

This project is cloning Amazon website by using React.

## 1. Login Page

![LoginPage](https://user-images.githubusercontent.com/21342802/95131215-aea57800-072b-11eb-9e41-4bca2aaecdcf.png)

I used `firebase.auth()` using firebase package. `firebase.auth()signInWithEmailAndPassword(email, password)` made it easy to setting the login page much easier.

## 2. Register Page

When the user click create account button, the webpage will be transferred to register page.

![RegisterPage](https://user-images.githubusercontent.com/21342802/95131409-00e69900-072c-11eb-8e91-a11e9e8f7e28.png)

I also used `firebase.auth()` for registration. `firebase.auth().createUserWithEmailAndPassword(email, password)` makes user to register their account just with email and password.

## 3. Home Page

When the user login successfully, it will show home page which contain header, image slider and product cards. I used `react-slick` for image slider.

![HomePage](https://user-images.githubusercontent.com/21342802/95131910-e7921c80-072c-11eb-9ce5-41496e30aa76.png)

![HomePage2](https://user-images.githubusercontent.com/21342802/95132026-16a88e00-072d-11eb-8466-cf4a44811c6a.png)

When the user click "Add to Basket" button, the product will be added to the basket.

## 4. Checkout Page

In the checkout page, it will show some products that user selected.

![CheckOutpage](https://user-images.githubusercontent.com/21342802/95132178-57080c00-072d-11eb-810e-d0c140006960.png)

When the user clicks "Remove from basket" button, the selected product will be deleted from the basket. I used `react-flip-move` to add some animation for removing checkout products.

## 5. Payment Page

In the payment page, the user can see the product card which will be purchased. I also used stripe which help the user to purchase the product. It requires card number, expiry date and CVC number.

![PayementPage](https://user-images.githubusercontent.com/21342802/95132928-823f2b00-072e-11eb-9ab2-f1000435dce3.png)

## 6. Order page

The order page will show the products that user purchased.

![OrderPage](https://user-images.githubusercontent.com/21342802/95133161-dfd37780-072e-11eb-84de-114e913fa6a0.png)

I used firestore from firebase by using `firebaseApp.firestore()`. Firestore makes it easier to bring the data stored in firebase.

## Sidebar

![Sidebar](https://user-images.githubusercontent.com/21342802/95133661-a6e7d280-072f-11eb-84f1-45313e416274.png)

## Footer

![Footer](https://user-images.githubusercontent.com/21342802/95133753-cda60900-072f-11eb-8f22-1d16f41260cb.png)

## Firebase Deployment

`firebase init`: Initializing firebase. The base root should be build folder. <br />
`npm run build`: Build the application. <br />
`firebase deploy`: Deploy the application through Firebase. <br />

## Click the below link to visit the website.

https://clone2-e1ec1.web.app/

## Thank you.
