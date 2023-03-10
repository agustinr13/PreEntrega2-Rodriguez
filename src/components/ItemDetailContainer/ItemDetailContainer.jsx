import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

  const [item, setItem] = useState([])
  const { itemID } = useParams()

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${itemID}`)
    .then(res => res.json())
    .then(data => 
      setItem(data)
    )
  }, [itemID])
  
  return (
    <div className='detailsCard'>
      <img src={item.thumbnail} alt={item.id} />
      <h3>{item.title}</h3>
      <h2>${item.price}</h2>
      <p>Disponibles: {item.available_quantity}</p>
      <p>Vendidos: {item.sold_quantity}</p>
      <a href={item.permalink}>LINK DE COMPRA</a>
    </div>
  )
}

export default ItemDetailContainer