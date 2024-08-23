import styles from './styles.module.scss'
import React from 'react';
import Image from 'next/image';
import Carousel from './components/carousel/page';

const collection =
    [
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "1078",
            "amount": "1",
            "token_hash": "2b996d651d46e45f9c60d37009d8bb5c",
            "block_number_minted": null,
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk1078.png\",\"name\":\"CryptoPunk 1078\",\"attributes\":[\"Eye Mask\",\"Hoodie\"],\"description\":\"Male\"}",
            "last_token_uri_sync": "2024-08-14T20:26:58.498Z",
            "last_metadata_sync": "2024-08-14T20:26:58.804Z",
            "minter_address": null,
            "rarity_rank": 6278,
            "rarity_percentage": 62.78,
            "rarity_label": "Top 63%",
            "possible_spam": false,
            "verified_collection": true
        },
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "1079",
            "amount": "1",
            "token_hash": "76261795a3490623bdb2ac870d8af97a",
            "block_number_minted": null,
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk1079.png\",\"name\":\"CryptoPunk 1079\",\"attributes\":[\"Purple Hair\"],\"description\":\"Male\"}",
            "last_token_uri_sync": "2024-08-14T20:26:58.498Z",
            "last_metadata_sync": "2024-08-14T20:26:58.758Z",
            "minter_address": null,
            "rarity_rank": 401,
            "rarity_percentage": 4.01,
            "rarity_label": "Top 5%",
            "possible_spam": false,
            "verified_collection": true
        },
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "108",
            "amount": "1",
            "token_hash": "97983b576d7208c7dff05f142eef1e3a",
            "block_number_minted": null,
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk108.png\",\"name\":\"CryptoPunk 108\",\"attributes\":[\"Black Lipstick\",\"Headband\"],\"description\":\"Female\"}",
            "last_token_uri_sync": "2024-08-14T20:26:58.484Z",
            "last_metadata_sync": "2024-08-14T20:26:58.810Z",
            "minter_address": null,
            "rarity_rank": 8063,
            "rarity_percentage": 80.63,
            "rarity_label": "Top 81%",
            "possible_spam": false,
            "verified_collection": true
        },
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "1080",
            "amount": "1",
            "token_hash": "06f881b86c6d58c3b788fa6fff0375bd",
            "block_number_minted": null,
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk1080.png\",\"name\":\"CryptoPunk 1080\",\"attributes\":[\"Hoodie\",\"Classic Shades\"],\"description\":\"Male\"}",
            "last_token_uri_sync": "2024-08-14T20:26:58.498Z",
            "last_metadata_sync": "2024-08-14T20:26:58.823Z",
            "minter_address": null,
            "rarity_rank": 7891,
            "rarity_percentage": 78.91,
            "rarity_label": "Top 79%",
            "possible_spam": false,
            "verified_collection": true
        },
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "1081",
            "amount": "1",
            "token_hash": "e703a3bd12ac59b58d0e0454b73426fc",
            "block_number_minted": "3918441",
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk1081.png\",\"name\":\"CryptoPunk 1081\",\"attributes\":[\"Blue Eye Shadow\",\"Frumpy Hair\",\"Cigarette\"],\"description\":\"Female\"}",
            "last_token_uri_sync": "2024-08-14T20:26:58.498Z",
            "last_metadata_sync": "2024-08-14T20:26:58.788Z",
            "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a",
            "rarity_rank": 5625,
            "rarity_percentage": 56.25,
            "rarity_label": "Top 57%",
            "possible_spam": false,
            "verified_collection": true
        },
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "1082",
            "amount": "1",
            "token_hash": "92de9c08c2adee5b11f074bb1f201004",
            "block_number_minted": "3918441",
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk1082.png\",\"name\":\"CryptoPunk 1082\",\"attributes\":[\"Wild Blonde\"],\"description\":\"Female\"}",
            "last_token_uri_sync": "2024-08-14T20:26:58.448Z",
            "last_metadata_sync": "2024-08-14T20:26:58.624Z",
            "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a",
            "rarity_rank": 346,
            "rarity_percentage": 3.46,
            "rarity_label": "Top 4%",
            "possible_spam": false,
            "verified_collection": true
        },
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "1083",
            "amount": "1",
            "token_hash": "99e15e712654eb38d05e9fada8d7dbf4",
            "block_number_minted": null,
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk1083.png\",\"name\":\"CryptoPunk 1083\",\"attributes\":[\"Straight Hair Blonde\",\"VR\",\"Earring\"],\"description\":\"Female\"}",
            "last_token_uri_sync": "2024-08-14T10:29:52.350Z",
            "last_metadata_sync": "2024-08-14T10:29:52.663Z",
            "minter_address": null,
            "rarity_rank": 3516,
            "rarity_percentage": 35.16,
            "rarity_label": "Top 36%",
            "possible_spam": false,
            "verified_collection": true
        },
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "1084",
            "amount": "1",
            "token_hash": "e1b2996b9641393c6b6e809f27257181",
            "block_number_minted": "3918441",
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk1084.png\",\"name\":\"CryptoPunk 1084\",\"attributes\":[\"Nerd Glasses\",\"Shaved Head\"],\"description\":\"Male\"}",
            "last_token_uri_sync": "2024-08-14T20:26:58.448Z",
            "last_metadata_sync": "2024-08-14T20:26:58.597Z",
            "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a",
            "rarity_rank": 8983,
            "rarity_percentage": 89.83,
            "rarity_label": "Top 90%",
            "possible_spam": false,
            "verified_collection": true
        },
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "1085",
            "amount": "1",
            "token_hash": "30b604bf1e8085cc0004ceec16672c56",
            "block_number_minted": "3918441",
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk1085.png\",\"name\":\"CryptoPunk 1085\",\"attributes\":[\"Cigarette\",\"Big Shades\",\"Mohawk Dark\"],\"description\":\"Male\"}",
            "last_token_uri_sync": "2024-08-14T20:26:58.449Z",
            "last_metadata_sync": "2024-08-14T20:26:58.703Z",
            "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a",
            "rarity_rank": 9318,
            "rarity_percentage": 93.18,
            "rarity_label": "Top 94%",
            "possible_spam": false,
            "verified_collection": true
        },
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "1086",
            "amount": "1",
            "token_hash": "e366acad29ce4511b33403e9db99fabb",
            "block_number_minted": "3918441",
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk1086.png\",\"name\":\"CryptoPunk 1086\",\"attributes\":[\"Blonde Short\"],\"description\":\"Female\"}",
            "last_token_uri_sync": "2024-08-14T20:26:58.449Z",
            "last_metadata_sync": "2024-08-14T20:26:58.646Z",
            "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a",
            "rarity_rank": 335,
            "rarity_percentage": 3.35,
            "rarity_label": "Top 4%",
            "possible_spam": false,
            "verified_collection": true
        },
        {
            "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            "token_id": "1087",
            "amount": "1",
            "token_hash": "66aca9b23cb62f587a57b7d552fee8d2",
            "block_number_minted": "3918441",
            "contract_type": "CRYPTOPUNKS",
            "name": "CRYPTOPUNKS",
            "symbol": "Ͼ",
            "token_uri": "Invalid uri",
            "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk1087.png\",\"name\":\"CryptoPunk 1087\",\"attributes\":[\"Mole\",\"Frumpy Hair\"],\"description\":\"Female\"}",
            "last_token_uri_sync": "2024-08-15T08:35:23.263Z",
            "last_metadata_sync": "2024-08-15T08:35:23.346Z",
            "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a",
            "rarity_rank": 8503,
            "rarity_percentage": 85.03,
            "rarity_label": "Top 86%",
            "possible_spam": false,
            "verified_collection": true
        }
    ];

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
                        <button className={`${styles.button} ${styles.buttonPrimary}`}>Explore</button>
                        <button className={`${styles.button} ${styles.buttonSecondary}`}>Create</button>
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
            <div className={styles.trending}>
                <p className={styles.header}>Trending NFTs</p>
                <Carousel collection={collection} />
            </div>
        </div>
    );
};

export default Home;