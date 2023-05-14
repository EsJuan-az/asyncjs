import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

fetch(`${API}/products`)
    .then(result => result.json())
    .then(products => {
        console.log(products[1].title)
        return fetch(`${API}/products/${products[0].id}`);
    })
    .then(result => result.json())
    .then(product => {
        console.log(product.title);
        return fetch(`${API}/categories/${product.category.id}`);
    })
    .then(result => result.json())
    .then(category => {
        console.log(category.name);
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("Todo ok");
    })