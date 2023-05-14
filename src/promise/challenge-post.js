import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
const data = {
    "title": "New Product",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any",]
}
let postData = (url, data) => fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
})


postData(`${API}/products/`, data)
    .then(result => result.json())
    .then(product => {
        console.log(product)
        return fetch(`${API}/products/${product.id}`)
    })
    .then(result => result.json())
    .then(product => {
        console.log(product)
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("Todo ok");
    })  
