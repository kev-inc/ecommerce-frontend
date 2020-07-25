// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
}

firebase.initializeApp(firebaseConfig)

var database = firebase.database()
var storage = firebase.storage()

// Banner Settings
export function getBanners() {
  return database.ref('/banners').once('value').then(snapshot => Object.entries(snapshot.val()))
}

export function addNewBanner(title, btnText, btnLink, imgUrl) {
	return database.ref('/banners').push({title, btnText, btnLink, imgUrl})
}

// Category Settings
export function addNewCategory(title, link, imgUrl) {
  return database.ref('/categories').push({title, link, imgUrl})
}

export function getCategories() {
  return database.ref('/categories').once('value').then(snapshot => Object.entries(snapshot.val()))
}

// Upload functions
export function uploadImage(filename, image) {
	return storage.ref(`/images/${filename}`).put(image)
}

export function getImageFirebaseURL(filename) {
	return storage.ref('images').child(filename).getDownloadURL()
}

// Product
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

export function getLatestProducts(n) {
  return database
          .ref('/products')
          .orderByKey()
          .limitToLast(n)
          .once('value')
          .then(snapshot => Object.entries(snapshot.val()))
}

export function getProduct(id) {
  return database.ref('/products/' + id).once('value').then(snapshot => snapshot.val())
}

// Orders
export function submitOrder(orderDetails) {
  return database.ref('/orders').push(orderDetails)
}

export function getAllOrders() {
  return database.ref('/orders').once('value').then(snapshot => Object.entries(snapshot.val()))
}




/*
product:
name
qty
description
price
img
tags

order:
timestamp
buyerDetails: {
  first name
  last name
  email address
  address
  hp number
}
itemDetails: {
  id
  name
  qty
}
*/
