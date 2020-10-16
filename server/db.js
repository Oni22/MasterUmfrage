//dummy db

var shops = [
    {
        id: "1",
        name: "Tante Emma",
        address: "Tantestraße 2",
        products: ["1","3"],
    },
    {
        id: "2",
        name: "Oma Lise",
        address: "Lisedamm 32",
        products: [{
            id: "1",
            name: "Butter",
            weight: "200g"
        },
        {
            id: "5",
            name: "Nutella",
            weight: "150g"
        }],
    }
]

var products = [
    {
        id: "1",
        name: "Butter",
        weight: "200g"
    },
    {
        id: "5",
        name: "Nutella",
        weight: "150g"
    },
    {
        id: "3",
        name: "Eier",
        weight: "100g"
    },
    {
        id: "10",
        name: "Käse",
        weight: "200g"
    }
]

module.exports = {
    products,
    shops
}