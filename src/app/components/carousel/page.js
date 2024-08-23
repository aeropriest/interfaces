import styles from "./styles.module.scss";
import NftInfo from "../NftInfo/page";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrows: false,
};

import React from "react";

const Carousel = ({ collection }) => {
  const nft = collection[0];
  return (
    <div className={styles.box}>
      {collection &&
        collection.map((nft, index) => {
          return <NftInfo key={index} metadata={JSON.parse(nft.metadata)} />;
        })}
    </div>
  );
};

export default Carousel;
