// components/ProductDetails.jsx
import { Panel } from "primereact/panel";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import style from "../components/productDetail.module.css";

function ProductDetails({ product }) {
  return (
    <Panel header="Détails du produit" className={style.productDetails}>
      <div className={style.productImage}>
        {/* Afficher l'image du produit */}
        <img src={product.image} alt={product.name} />
      </div>
      <div className={style.productInfo}>
        <h1 className={style.productName}>{product.name}</h1>
        <Rating value={product.rating} onChange={(e) => setValue(e.value)} stars={5} cancel={false} />
        <p className={style.productDescription}>{product.description}</p>
        <div className={style.productPrice}>
          {/* Afficher le prix du produit */}
          <span className={style.priceLabel}>Prix :</span>
          <span className={style.priceValue}>{product.price} €</span>
        </div>
        <Button label="Ajouter au panier" className={style.addToCartButton} />
      </div>
    </Panel>
  );
}

export default ProductDetails;
