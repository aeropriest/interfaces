import styles from './styles.module.scss'
import React from 'react';
import Navbar from '../components/navbar/page';
import { FaWallet } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { TbCirclesFilled } from "react-icons/tb";
import { RiNftFill } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineSwap } from "react-icons/ai";
import { IoQrCodeOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";

import Table from '../components/table/page';
import Header from '../components/header/page';
import Button from '../components/button/page';

const Analytics = () => {
    return (
        <div className="styles.body">
            <div>Assets Allocation</div>
            <div>Portfolio Performance</div>
            <div>Wallet Analyser</div>
            <div>Heat Map</div>
        </div >
    )

};

export default Analytics;