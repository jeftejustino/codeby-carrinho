import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 20px 0px;

  .img {
    width: 150px;
    border: 1px solid #aaa;
    padding: 0px 20px;
    margin-right: 25px;

    img {
      width: 100%;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .title {
    color: #000;
    font-weight: bold;
    font-size: 20px;
    padding: 15px 0px 25px;
  }

  .price {
    color: #999;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 5px;
  }

  .priceTag {
    font-weight: 600;
    font-size: 20px;
  }
`
