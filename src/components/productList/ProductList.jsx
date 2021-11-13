import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Work</h1>
        <p className="pl-desc">
          This are some projects i have worked on, some are professional, some
          are learning experiences.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
