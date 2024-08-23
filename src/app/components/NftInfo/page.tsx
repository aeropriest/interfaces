'use client'
import styles from './styles.module.scss'
import Image from 'next/image';
import React from 'react';
import { faker } from '@faker-js/faker';


const NftInfo = ({ metadata }: any) => {
    console.log('The metadata', metadata);
    return (
        <div className={styles.gradientBox}>
            <Image className={styles.nftImage} src={metadata.image} height={200} width={220} alt={metadata.name} />
            <div className={styles.ownerInfo}>
                {/* <Image className={styles.userPic} src={faker.image.avatar()} width={50} height={80} alt={"handle"} /> */}
                <Image className={styles.userPic} src={faker.image.avatar()} width={35} height={40} alt={"handle"} />
                <div className={styles.middleInfo}>
                    <div >{metadata.name}</div>
                    <div className={styles.userName}>{faker.internet.userName()}</div>
                </div>
                <Image className={styles.chainPic} src={'/wallets/exodus.png'} width={15} height={20} alt={"handle"} />
            </div>
        </div>)
    return (
        <>
            <div className={styles.main}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Image className={styles.image} src={metadata.image} height={200} width={220} alt={metadata.name} />
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        color: 'black',
                        padding: '0 0 0 10px'
                    }}>{metadata.name}</p>
                    <p style={{
                        fontSize: '15px',
                        color: 'darkgray',
                        padding: '0 0 0 10px'
                    }}>{metadata.description}</p>
                </div>
                <div className={styles.traitsBox}>
                    {metadata?.attributes && metadata.attributes.map((attr: any, index: number) => {
                        console.log(attr);
                        return (<div key={index}>
                            <p className={styles.traits}>{attr}</p>
                        </div>)
                    })}
                </div>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'end'
                }}>
                    <button className={styles.button}>Buy</button>
                </div>
            </div >
        </>

    )
};

export default NftInfo;