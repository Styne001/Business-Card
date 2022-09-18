import React from "react"
import Twitter_Icon from '/src/assets/Twitter_Icon.png'
import Facebook_Icon from '/src/assets/Facebook_Icon.png'
import Instagram_Icon from '/src/assets/Linkedin_Icon.png'
import Github_Icon from '/src/assets/Github_Icon.png'

export default function Footer() {
    return (
        <main className="footer">
            <a href="https://twitter.com/Styne001">
                <img src="/src/assets/Twitter_Icon.png"/>
            </a>
            <a href="">
                <img src="/src/assets/Facebook_Icon.png"/>
            </a>
            <a href="">
                <img src="/src/assets/Instagram_Icon.png"/>
            </a>
            <a href="https://www.linkedin.com/in/celestine-okonkwo-954a11174/">
                <img src="/src/assets/Linkedin_Icon.png"/>
            </a>
            <a href="https://github.com/Styne001">
                <img src="/src/assets/Github_Icon.png"/>
            </a>
        </main>
    )
}