import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = async(urlApi) => {
    try{
        const response = await fetch(urlApi)
        const data = await response.json()
        return data
    }catch(error){
        throw new Error(error)
    }
}

const getProducts = async(urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products`)
        return products
    }
    catch(error){
        throw new Error(error)
    }
}
const getProduct = async(urlApi, id) => {
    try{
        const product = await fetchData(`${urlApi}/products/${id}`)
        return product
    }
    catch(error){
        throw new Error(error)
    }
}
const getCategory = async(urlApi, id) => {
    try{
        const category = await fetchData(`${urlApi}/categories/${id}`);
        return category
    }
    catch(error){
        throw new Error(error);
    }
};

const doSomething = async() => {
    try{
        let products = await getProducts(API);
        console.log(products[0].title);
        let product = await getProduct(API, 10);
        console.log(product.title)
        let category = await getCategory(API, 2);
        console.log(category.name);
        return "Ok"
    }
    catch(error){
        throw new Error(error);
    }
};

doSomething()