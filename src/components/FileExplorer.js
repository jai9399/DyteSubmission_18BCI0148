import React from 'react';
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3";
import { FaJs } from "@react-icons/all-files/fa/FaJs";

export default function FileExp(props)
{   

    return(
       <div className="file-explorer-container">
           <p className="file-title">FILE EXPLORER</p>
           <div className="list">
           <div onClick={() => props.onSelection("index.html")}><FaHtml5 color="orange" size="15px"></FaHtml5><span>index.html</span></div>
           <div onClick={() => props.onSelection("index.css")}><FaCss3 color="blue" size="15px"></FaCss3><span>index.css</span></div>
           <div onClick={() => props.onSelection("index.js")}><FaJs color="yellow" size="15px"></FaJs><span>index.js</span></div>
           </div>
       </div>
    );
}