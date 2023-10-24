import { ProductT } from "@/redux/cart";
import ProductAdd from "../productAdd/productAdd";
import styles from "./productDetails.module.css";

type Props = {
  product: ProductT;
};

function ProductDetails({ product }: Props) {
  return (
    <>
      <div className={styles.product_details_layout}>
        <h4 className={styles.product_company}>{product.company.toUpperCase()}</h4>
        <h2>{product.name}</h2>
        <span className={styles.product_details}>{product.details}</span>
        <div className={styles.product_price}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className={styles.price}>{`$${product.price.toFixed(2)}`}</span>
            <span className={styles.discount}>{`${product.discount}%`}</span>
          </div>
          <span className={styles.full_price}>{`$${product.fullPrice.toFixed(2)}`}</span>
        </div>
      </div>
      <ProductAdd product={product} />
    </>
  );
}

export default ProductDetails;
