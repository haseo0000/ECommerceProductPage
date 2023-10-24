import Image from "next/image";
import styles from "./modal.module.css";
import RemoveIcon from "@/assets/images/icon-delete.svg";

import { useDispatch } from "react-redux";
import { CartsT, handleRemoveItemCart } from "@/redux/cart";

type Props = {
  isShow?: boolean;
  carts: CartsT[];
};

function ItemImage() {
  return (
    <div
      style={{
        width: "50px",
        aspectRatio: "1",
        background: "gray",
        borderRadius: "5px",
      }}>
      image
    </div>
  );
}

function ItemDetails({ name, price, amount, totalPrice }: CartsT) {
  return (
    <div style={{ display: "grid" }}>
      <span>{name}</span>
      <div>
        <span>{`$${price?.toFixed(2)} x ${amount} `}</span>
        <span style={{ fontWeight: "bold" }}>{`$${totalPrice?.toFixed(2)}`}</span>
      </div>
    </div>
  );
}

function Modal({ isShow = false, carts }: Props) {
  const dispatch = useDispatch();

  return (
    <>
      {isShow && (
        <div className={styles.modal_layout}>
          <div className={styles.content_layout}>
            <div className={styles.header}>
              <span>Cart</span>
            </div>
            {carts.length === 0 ? (
              <div className={styles.empty_layout}>
                <span>Your cart is empty.</span>
              </div>
            ) : (
              <div className={styles.items_layout}>
                <div>
                  {carts.map((cart) => (
                    <div key={cart.id} className={styles.items_details}>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <ItemImage />
                        <ItemDetails
                          name={cart.name!}
                          price={cart.price!}
                          amount={cart.amount!}
                          totalPrice={cart.totalPrice!}
                        />
                      </div>
                      <div
                        className={styles.checkout_layout}
                        onClick={() => dispatch(handleRemoveItemCart({ id: cart.id! }))}>
                        <Image
                          src={RemoveIcon}
                          alt="RemoveIcon"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button type="button" className={styles.checkout_button}>
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
