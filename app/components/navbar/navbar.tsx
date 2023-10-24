"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CartIcon from "@/assets/images/icon-cart.svg";
import AvartarIcon from "@/assets/images/image-avatar.png";
import MenuIcon from "@/assets/images/icon-menu.svg";
import LogoIcon from "@/assets/images/logo.svg";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import Modal from "../modal/modal";
import styles from "./navbar.module.css";

function Navbar() {
  const [modalCart, setModalCart] = useState(false);
  const { carts } = useSelector((state: RootState) => state.carts);

  const pathname = usePathname();

  const handleShowCart = () => {
    setModalCart((prev) => !prev);
  };

  const amount = useMemo(() => {
    let tempAmount = 0;
    carts.forEach((item) => (tempAmount = tempAmount + item.amount));
    return tempAmount;
  }, [carts]);

  return (
    <>
      <div className={styles.navbar_layout}>
        <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
          <div className={styles.menuIcon}>
            <Image src={MenuIcon} alt="MenuIcon" width={100} />
          </div>
          <div className={styles.logoIcon}>
            <Image src={LogoIcon} alt="LogoIcon" width={100} priority />
          </div>
          <nav className={styles.list_nav_layout}>
            <Link href={"/"} className={pathname === "/" ? styles.active : ""}>
              Collections
            </Link>
            <Link href={"/mens"} className={pathname === "/mens" ? styles.active : ""}>
              Men
            </Link>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div className={styles.cartIcon} onClick={() => handleShowCart()}>
            <Image src={CartIcon} alt="CartIcon" width={100} />
            {amount !== 0 && <div className={styles.amountCart}>{amount}</div>}
          </div>
          <div className={styles.avartarIcon}>
            <Image src={AvartarIcon} alt="AvartarIcon" width={100} />
          </div>
        </div>
      </div>
      <Modal isShow={modalCart} carts={carts} />
    </>
  );
}

export default Navbar;
