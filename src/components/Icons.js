
import ImgEmail from "../assets/email1.svg";
import ImgGithub from "../assets/github1.svg";
import ImgCV from "../assets/cv.svg";
import { Link } from 'react-router-dom';
import "../styles/Icons.css";


import React from "react";

import "../styles/Home.css";


function Icons() {

    return (
        <div className="icons">
            <Link className="imgicon" to="https://github.com/annaszumiec" target="_blank"> <img src={ImgGithub} alt="" /></Link>
            <Link className="imgicon" to="https://drive.google.com/file/d/1Kup7ArQWT1EPZ8T3VGBkaZAtxCI_bvgr/view?usp=sharing" target="_blank" rel="noreferrer" > <img src={ImgCV} alt="" /></Link>
            <Link className="imgicon" to="mailto:szumiecam@gmail.com" target="_blank"> <img src={ImgEmail} alt="" />
            </Link>
        </div>
    );
}

export default Icons;
