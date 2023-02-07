import "./CardsMove.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import "../../App.css"


export default function CardsMove() {
  const product = productData.map((item) => (
    <Product
    bc={item.color}
    name={item.name}
    url={item.imageurl}
    price={item.price}
    description={item.description}
    IsTalla={item.IsTalla}
  >
      <p className="p-buttons">                                
          {
          item.tallas.map((numero) => {                
          return <button className="product-button-talla">{numero}</button> || []}
          )}
      </p>
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