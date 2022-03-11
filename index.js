const axios = require('axios')
const Product = require('./product')

const URL = 'https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1';

let products = new Array();

const getData = async () => {

    const result = await axios.get(URL);
    const data = result.data;
    data.forEach(element => {
        const { name, domestic, price, weight, description } = element;
        let newProduct = new Product(name, domestic, price, weight, description)
        products.push(newProduct)
    });

    let domesticProducts = products.filter(product => product.domestic === true)
    domesticProducts.sort((a, b) => a.getName().localeCompare(b.getName()))
    let importedProducts = products.filter(product => product.domestic === false)
    importedProducts.sort((a, b) => a.getName().localeCompare(b.getName()));

    console.log("Domestic")
    domesticProducts.forEach(p => p.print());
    console.log("Imported")
    importedProducts.forEach(p => p.print())

    let domesticCost = domesticProducts.reduce((prev, curr) => prev + curr.getPrice(), 0)
    let importedCost = importedProducts.reduce((prev, curr) => prev + curr.getPrice(), 0)
    console.log(`Domestic cost: $${domesticCost}`)
    console.log(`Imported cost: $${importedCost}`)
    console.log(`Domestic count: ${domesticProducts.length}`)
    console.log(`Imported count: ${importedProducts.length}`)

}

getData()