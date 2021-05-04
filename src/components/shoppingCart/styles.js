import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  width: 650px;
  max-width: 90%;
  border-radius: 15px;
  box-shadow: 0px 0px 30px 5px #b5b5b5;
  margin: auto;
`

export const Header = styled.div`
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 26px;
  border-bottom: 1px solid #aaa;
  padding: 25px 0px;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0px;
`

export const Products = styled.div`
  border-bottom: 1px solid #aaa;
  padding: 30px 20px;
`

export const Total = styled.div`
  border-bottom: 1px solid #aaa;
  padding: 35px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .label {
    font-size: 26px;
    font-weight: bold;
  }

  .value {
    font-size: 26px;
    font-weight: bold;
  }

  .free {
    width: 100%;
    text-align: center;
    padding-top: 20px;
    display: ${(props) => (props.hiddenFree ? 'none' : 'block')};

    span {
      background: #c7ffa6;
      color: #217a04;
      border-radius: 30px;
      padding: 15px 25px;
      font-size: 20px;
      font-weight: 500;
      display: inline-block;
    }
  }
`

export const Footer = styled.div`
  padding: 25px 20px;
  text-align: center;

  button {
    background-color: #3b74f2;
    color: #fff;
    font-weight: bold;
    width: 100%;
    border-radius: 10px;
    padding: 20px 0px;
    text-align: center;
    font-size: 22px;
    transition: 0.3s all;

    :hover,
    :focus {
      outline: none;
      border: none;
      cursor: pointer;
      opacity: 0.8;
    }
  }
`
