// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/database";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
}

firebase.initializeApp(firebaseConfig)

var database = firebase.database()

export function addNewProduct(product) {
  return database.ref('/products').push(product)
}

export function deleteProduct(id) {
  return database.ref('/products/' + id).remove()
}

export function getAllProducts() {
  return database.ref('/products').once('value').then(snapshot => Object.entries(snapshot.val()))
}

export function getCategoryProducts(category) {
  return database.ref('/products').once('value').then(snapshot => {
    const allProducts = Object.entries(snapshot.val())
    const filteredProducts = allProducts.filter(product => product[1]['tags'].includes(category))
    return filteredProducts
  })
}

export function getProduct(id) {
  return database.ref('/products/' + id).once('value').then(snapshot => snapshot.val())
}




/*
product:
name
qty
description
price
img
tags
*/
