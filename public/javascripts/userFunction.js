const addToCart = (productId)=>{
    fetch(`/add-to-cart/${productId}`,{
        method: 'GET' ,
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{
        console.log(res);
    }).catch((error)=>{
        console.error(error);
    })
}

const changeQty=(productId,price,value)=>{
    console.log(productId)
    console.log(price)
    console.log(value)

    fetch('/quantity',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            productId:productId,
            value:value,
            price:price
        })
    }).then((res)=>{
        console.log(res);
    }).catch((error)=>{
        console.error(error);
    })
}
