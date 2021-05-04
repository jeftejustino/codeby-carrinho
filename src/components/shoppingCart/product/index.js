import React from 'react'

import { formatPrice } from '../../../util/format'
import { Container } from './styles'

export default function Product({ product }) {
  return (
    <Container>
      <div className='img'>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className='info'>
        <div className='title'>{product.name}</div>
        <div className='price'>{formatPrice(product.price / 100)}</div>
        <div className='priceTag'>
          {formatPrice((product.price + product.priceTags[0].value) / 100)}
        </div>
      </div>
    </Container>
  )
}
