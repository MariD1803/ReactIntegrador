import "./CardsMove.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import "../../App.css"
import styled from "styled-components";

const StyledP = styled.p `

  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 20px;  

  @media (max-width: 2700px) {
    font-size: 14px; 
  }

`

export default function CardsMove() {
  const product = productData.map((item) => (
    <Product key={item.id}
    bc={item.color}
    name={item.name}
    url={item.imageurl}
    price={item.price}
    description={item.description}
    IsTalla={item.IsTalla}
  >
      <StyledP className="p-buttons">                  
          {
          item.tallas.map((numero) => {                
          return <button key={numero+item.id} className="product-button-talla">{numero}</button> || []}
          )}
      </StyledP>
  </Product>
  ));

  return (
    <div className="App">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}