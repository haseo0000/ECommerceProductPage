"use client";

import React from "react";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import "./productImage.module.css";

function ProductImage() {
  const images = [
    {
      original: "/imgProduct/image-product-1.jpg",
      thumbnail: "/imgProduct/image-product-1-thumbnail.jpg",
    },
    {
      original: "/imgProduct/image-product-2.jpg",
      thumbnail: "/imgProduct/image-product-2-thumbnail.jpg",
    },
    {
      original: "/imgProduct/image-product-3.jpg",
      thumbnail: "/imgProduct/image-product-3-thumbnail.jpg",
    },
    {
      original: "/imgProduct/image-product-4.jpg",
      thumbnail: "/imgProduct/image-product-4-thumbnail.jpg",
    },
  ];

  return (
    <>
      <div style={{ width: "100%", height: "300px" }}>
        <ImageGallery
          items={images}
          showPlayButton={false}
          useBrowserFullscreen={false}
        />
      </div>
    </>
  );
}

export default ProductImage;
