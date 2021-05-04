import React, { useState } from 'react'

import cart1 from '../../jsons/cart1.json'
import cart2 from '../../jsons/cart2.json'
import Product from './product'

import { formatPrice } from '../../util/format'
import { Container, Header, Total, Footer, Products } from './styles'

export default function Home() {
  const [cart, setCart] = useState(cart1)

  function onClickButton() {
    if (cart != cart1) setCart(cart1)
    else setCart(cart2)
  }

  return (
    <Container>
      <Header>Meu carrinho</Header>

      <Products>
        {cart.items.map((product) => (
          <Product product={product} />
        ))}
      </Products>

      <Total hiddenFree={cart.value < 1000 ? true : false}>
        <div class='label'>Total</div>
        <div class='value'>{formatPrice(cart.value / 100)}</div>
        <div class='free'>
          <span>Parabéns, sua compra tem frete grátis!</span>
        </div>
      </Total>

      <Footer>
        <button type='button' onClick={() => onClickButton()}>
          Finalizar compra
        </button>
      </Footer>
    </Container>
  )
}
