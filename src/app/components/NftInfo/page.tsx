import styles from './styles.module.scss'
import Image from 'next/image';
import React from 'react';

const NftInfo = ({ metadata }: any) => {
    return (
        <>
            <div className={styles.main}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {/* <Image className={styles.image} src={metadata.image} height={200} width={220} alt={metadata.name} /> */}
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
                        // console.log(attr);
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