
export async function getProducts( name ){
    let res = await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${name.replace(' ', '-')}`);
    res = await res.json();
    return res.results;
}

export async function getFormatProducts( name ){
    let prods = (await getProducts(name)).map(actual => {
        return {
            id: actual.id,
            name: actual.title,
            precio: actual.price,
            stock : actual.available_quantity,
            img: actual.thumbnail
        }
    });
    return prods;
}

//MCO551622386
export async function getProduct(id){
    let res = await fetch(`https://api.mercadolibre.com/items/${id}`);
    res = await res.json();
    return res;
}

export async function getFormatProduct(id){
    const prod = await getProduct(id);
    // console.log(prod);
    return {    
        id: prod.id,
        name: prod.title,
        precio: prod.price,
        stock : prod.available_quantity,
        img: prod.pictures[0].url,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt ratione dicta illum facere. Repellat temporibus libero deserunt dolor eligendi perferendis illo, suscipit enim minus cum eaque maiores saepe corporis!'
        //No logré conseguir la descripción.
    }
}

