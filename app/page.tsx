import styles from "./page.module.css";

import ProductDetails from "./components/productDetails/productDetails";
import ProductImage from "./components/productImage/productImage";
import { ProductT } from "@/redux/cart";

const product: ProductT = {
  id: 1,
  company: "sneaker company",
  name: "FALL Limited Edition Sneakers",
  details: `Lorem ipsum dolor sit amet consectetur, 
  adipisicing elit. Alias et unde a doloribus ipsum iusto omnis 
  nesciunt eveniet, impedit ullam qui ut similique eum. 
  Amet asperiores nesciunt unde aspernatur veritatis.`,
  price: 125.0,
  fullPrice: 250.0,
  discount: 50,
};

export default function Home() {
  return (
    <div className="container_layout">
      <ProductImage />
      <div className={styles.container_product_details_layout}>
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
