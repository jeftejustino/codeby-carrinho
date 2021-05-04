import React, { useEffect, useState } from 'react'

import Product from './product'
import ClipLoader from 'react-spinners/ClipLoader'

import { formatPrice } from '../../util/format'
import { Container, Header, Total, Footer, Products, Loading } from './styles'
import axios from 'axios'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [cart, setCart] = useState({
    value: 0,
    items: [],
  })
  const url_cart1 =
    'https://raw.githubusercontent.com/jeftejustino/codeby-carrinho/master/src/jsons/cart1.json'
  const url_cart2 =
    'https://raw.githubusercontent.com/jeftejustino/codeby-carrinho/master/src/jsons/cart2.json'
  const [cartUrl, setCartUrl] = useState(url_cart1)

  function onClickButton() {
    if (cartUrl != url_cart1) setCartUrl(url_cart1)
    else setCartUrl(url_cart2)
  }

  async function loadCart() {
    setLoading(true)
    axios
      .get(cartUrl)
      .then(function (response) {
        setCart(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
  }

  useEffect(() => {
    loadCart()
  }, [cartUrl])

  return (
    <Container>
      <Header>Meu carrinho</Header>

      {loading ? (
        <Loading>
          <ClipLoader color='#3b74f2' loading={loading} size={50} />
        </Loading>
      ) : (
        <>
          <Products>
            {cart.items ? (
              cart.items.map((product) => <Product product={product} />)
            ) : (
              <div className='empty'>Carrinho Vazio!</div>
            )}
          </Products>

          <Total hiddenFree={cart.value < 1000 ? true : false}>
            <div class='label'>Total</div>
            <div class='value'>{formatPrice(cart.value / 100)}</div>
            <div class='free'>
              <span>Parabéns, sua compra tem frete grátis!</span>
            </div>
          </Total>
        </>
      )}
      <Footer>
        <button
          type='button'
          disabled={loading}
          onClick={() => onClickButton()}
        >
          Finalizar compra
        </button>
      </Footer>
    </Container>
  )
}
