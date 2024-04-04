import React from 'react'

const CatalogueContext = React.createContext();

function CatalogueProvider({ children }) {

    const products = [{
        title: "Bolso Mujer",
        category: "woman",
        image: "https://belcorpcolombia.vtexassets.com/arquivos/ids/936140-800-800?v=638296381698600000&width=800&height=800&aspect=true",
        price: 123,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel impedit quaerat commodi necessitatibus accusantium, rerum maiores quos aliquam id fugit sint cupiditate placeat repudiandae ipsam, velit error magnam voluptatum esse.",
    },{
        title: "Bolso Hombre",
        category: "man",
        image: "https://exitocol.vtexassets.com/arquivos/ids/5294284/hombres-bolso-de-lujo-canguro-marca-cuero-messenger-bolso-hombre-bolsa.jpg?v=637432976293500000",
        price: 456,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel impedit quaerat commodi necessitatibus accusantium",
    },{
        title: "Bolso Niño",
        category: "kids",
        image: "https://i.ebayimg.com/thumbs/images/g/x-cAAOSwH~pldsvm/s-l640.jpg",
        price: 789,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel impedit quaerat commodi necessitatibus accusantium, rerum maiores quos aliquam id fugit sint cupiditate",
    },{
        title: "Bolso Hombre",
        category: "man",
        image: "https://exitocol.vtexassets.com/arquivos/ids/5294284/hombres-bolso-de-lujo-canguro-marca-cuero-messenger-bolso-hombre-bolsa.jpg?v=637432976293500000",
        price: "987",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel impedit quaerat commodi necessitatibus accusantium, rerum maiores quos aliquam id fugit sint cupiditate",
    },{
        title: "Bolso Niños",
        category: "kids",
        image: "https://i.ebayimg.com/thumbs/images/g/x-cAAOSwH~pldsvm/s-l640.jpg",
        price: "654",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel impedit quaerat commodi necessitatibus accusantium, rerum maiores quos aliquam id fugit sint cupiditate placeat repudiandae ipsam, velit error magnam voluptatum esse.",
    },{
        title: "Bolso Mujer",
        category: "woman",
        image: "https://belcorpcolombia.vtexassets.com/arquivos/ids/936140-800-800?v=638296381698600000&width=800&height=800&aspect=true",
        price: "321",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel impedit quaerat commodi necessitatibus accusantium",
    }];


    return (
    <CatalogueContext.Provider value={{
        products
    }}>
        {children}
    </CatalogueContext.Provider>
    )
}

export { CatalogueContext, CatalogueProvider }