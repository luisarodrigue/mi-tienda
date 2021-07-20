import { getFirestore } from "../firebase/firebase";

export async function getProducts( name ){
    const db = getFirestore();
    const items = db.collection('productos').limit(21);
    const aux = await items.get().then((query)=>{
        if(query.size===0){
            console.log('no results!');
        }
        return query.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()};
        });
    }).catch((error)=>{
        console.log('error buscando items!! ',error);
        return [];
    });
    return aux;
}

export async function getFormatProducts( name ){
    let prods = (await getProducts(name)).map(actual => {
        return {
            id: actual.id,
            name: actual.name,
            precio: actual.precio,
            stock : actual.stock,
            img: actual.img
        }
    });
    return prods;
}

//MCO551622386
export async function getProduct(id){
    const db = getFirestore();
    const prodQuery = db.collection('productos').doc(id);
    const aux = await prodQuery.get().then((doc)=>{
        if(!doc.exists){
            console.log('El producto no existe');
            return;
        }

        return {id: doc.id, ...doc.data()};
    })
    return aux;
}

export async function getFormatProduct(id){
    const prod = await getProduct(id);
    // console.log(prod);
    const auxDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt ratione dicta illum facere. Repellat temporibus libero deserunt dolor eligendi perferendis illo, suscipit enim minus cum eaque maiores saepe corporis!';
    return {    
        id: prod.id,
        name: prod.name,
        precio: prod.precio,
        stock : prod.stock,
        img: prod.img,
        description: prod.description || auxDesc
        //No logré conseguir la descripción.
    }
}

export async function getProductByCategory(category){
    const db = getFirestore();
    const items = db.collection('productos').where('category', '==', category).limit(21);
    const aux = await items.get().then((query)=>{
        if(query.size===0){
            console.log('no results!');
        }
        return query.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()};
        });
    }).catch((error)=>{
        console.log('error buscando items!! ',error);
        return [];
    });
    return aux;
}