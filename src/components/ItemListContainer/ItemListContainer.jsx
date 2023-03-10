import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const {productID} = useParams()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${productID}&limit=20`)
            .then(res => res.json())
            .then(data => {
                const productsArray = Array.from(data.results)
                setProducts(productsArray)
                setIsLoading(false)})
            
    }, [productID])
    return ( 
            <div className="container">
            <div className='row'>
                {
                    !isLoading? 
                    <>
                    {products.map((prod) =>{
                        return(
                            <div key={prod.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                <div className="card h-100">
                                    <img src={prod.thumbnail} className="card-img-top" alt={prod.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{prod.title}</h5>
                                        <p className="card-text">$ {prod.price}</p>
                                    </div>
                                    <div className="card-footer">
                                    <Link to={`/item/${prod.id}`} className="btn btn-primary">Detalles</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </>
                    :
                    <h1>Cargando Productos...</h1>
                } 
            </div>
            </div>        
    )
}

export default ItemListContainer

