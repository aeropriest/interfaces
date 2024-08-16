import styles from './styles.module.scss'
import React from 'react';
import Image from 'next/image';

const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>DegenArt</div>
            <div className={styles.hero}>
                <div className={styles.title}>
                    <div className={styles.heading}>Discover, collect & sell
                        <p className={styles.gradient}>Extraordinary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        NFTs
                    </div>
                    <p className={styles.text}>The leading NFT Marketplace on EthereumHome to the next generation of digital creators. Discover the best NFT
                    </p>
                    <div className={styles.cta}>
                        <button className={styles.button}>Explore</button>
                        <button className={styles.button}>Create</button>
                    </div>
                    <div className={styles.usp}>
                        <div className={styles.item}>
                            <p className={styles.heading}>200K+</p>
                            <p className={styles.text}>Collections</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.heading}>10K+</p>
                            <p className={styles.text}>Artists</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.heading}>100K+</p>
                            <p className={styles.text}>Communities</p>
                        </div>
                    </div>
                    <div className={styles.blurred}></div>
                </div>
                <div className={styles.mosaic}>
                    <div className={styles.grid}>
                        {/* <Image className={styles.image} src='https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif' alt='adam' height={200} width={200} /> */}
                        <Image className={styles.image} src='/king.jpeg' alt='adam' height={200} width={200} />
                        <Image className={styles.image} src='/doc.jpeg' alt='adam' height={200} width={200} />
                        <Image className={styles.image} src='/cybo.jpeg' alt='doc' height={200} width={200} />
                        <Image className={styles.image} src='/lady.jpeg' alt='lady' height={200} width={200} />
                    </div>
                </div>
            </div>
            <div className={styles.wallets}>
                <div className={styles.wallet}>
                    <Image src='/wallets/metamask.png' alt='metamask' width={50} height={50} />
                    <p>Metamask</p>
                </div>
                <div className={styles.wallet}>
                    <Image src='/wallets/binance.png' alt='metamask' width={50} height={50} />
                    <p>Binance</p>
                </div>
                {/* <div className={styles.wallet}>
                    <Image src='/wallets/cryptodotcom.png' alt='metamask' width={50} height={50} />
                    <p>Crypto.com</p>
                </div> */}
                <div className={styles.wallet}>
                    <Image src='/wallets/exodus.png' alt='metamask' width={50} height={50} />
                    <p>Exodus</p>
                </div>
                <div className={styles.wallet}>
                    <Image src='/wallets/solflare.png' alt='metamask' width={50} height={50} />
                    <p>Solflare</p>
                </div>
                <div className={styles.wallet}>
                    <Image src='/wallets/trustwallet.png' alt='metamask' width={50} height={50} />
                    <p>Trust Wallet</p>
                </div>

            </div>
        </div>
    );
};

export default Home;