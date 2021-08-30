import React from 'react'
import { FaFacebook as Facebook, FaGithub as Github, FaTwitter as Twitter} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
 
            <div className="circle"> 
                <Facebook className="icon"/>
                
            </div>
            <div className="circle">
                <Github className="icon"/>
            </div>

            <div className="circle">
            <Twitter className="icon"/>
            </div>

            <p>Copyright © Your Website 2021</p>
        </div>
    )
}
