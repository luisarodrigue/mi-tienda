import React, {useState} from 'react'
import Button  from 'react-bootstrap/Button'

export default function ItemCount({stock, onAdd, value=1, buttonCaption='comprar'}) {
    const [count, setCount]= useState(value);  
    function onChange (e){
        let value= e.target.value;
        if (value > stock){
            setCount(stock);
        }
        else if (value < 1){
            setCount(1);
        }
        else{
            setCount(value);
        }
    } 
    function sumar () { 
        if (count < stock ){
            setCount(count +1);  
        }    
       
    }
    function restar () { 
        if (count > 1 ){
            setCount(count -1);  
        }    
       
    }
    return (
        <div>
            <button onClick={restar}> - </button>
            <input onChange={onChange} type= "number" value={count} style={{maxWidth: '3rem', textAlign: 'center'}}/>
            <button onClick={sumar}> + </button>
            <br></br> 
        <Button disabled={stock <= 0} onClick= {()=> onAdd(count)} variant="primary">{stock <= 0? 'agotado': buttonCaption}</Button>
        </div>
    )
}
