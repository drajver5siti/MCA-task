class Product {
    constructor(name, domestic, price, weight, description) {
        this.name = name;
        this.domestic = domestic;
        this.price = price;
        this.weight = weight;
        this.description = description;
    }

    getName() {
        return this.name;
    }
    getPrice() {
        return this.price
    }
    print() {
        console.log(`   ${this.name}\n   Price: $${this.price}\n   Weight: ${this.weight ? '' + this.weight + 'g' : 'N/A'}`)
    }

}

module.exports = Product;