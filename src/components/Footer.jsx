import React from "react"
import Twitter_Icon from '../assets/Twitter_Icon.png'
import Facebook_Icon from '../assets/Facebook_Icon.png'
import Instagram_Icon from '../assets/Instagram_Icon.png'
import Linkedin_Icon from '../assets/Linkedin_Icon.png'
import GitHub_Icon from '../assets/GitHub_Icon.png'

export default function Footer() {
    return (
        <main className="footer">
            <a href="https://twitter.com/Styne001">
                <img src={Twitter_Icon}/>
            </a>
            <a href="">
                <img src={Facebook_Icon}/>
            </a>
            <a href="">
                <img src={Instagram_Icon}/>
            </a>
            <a href="https://www.linkedin.com/in/celestine-okonkwo-954a11174/">
                <img src={Linkedin_Icon}/>
            </a>
            <a href="https://github.com/Styne001">
                <img src={GitHub_Icon}/>
            </a>
        </main>
    )
}