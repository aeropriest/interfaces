import styles from './styles.module.scss'
import Image from 'next/image';
import React from 'react';

const NftInfo = ({ metadata }: any) => {
    console.log('The matadata', metadata);
    return (
        <div className={styles.container}>
            <Image className={styles.roundedImage} src={metadata.image} height={200} width={200} alt={metadata.name} />
            <div className={styles.info}>
                <p className={styles.name}>{metadata.name}</p>
                <p className={styles.description}>{metadata.description}</p>
                {metadata?.attributes && metadata.attributes.map((attr: any, index: number) => {
                    console.log(attr);
                    return (<p className={styles.attribute} key={index}>{attr}</p>)

                })}

            </div>

        </div>
    );
};

export default NftInfo;