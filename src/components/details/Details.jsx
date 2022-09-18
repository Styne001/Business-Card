import React from "react"
//import reactLogo from '../src/assets/react.svg'

export default function Details() {
    return (
        <section className="details">
            <h2 className="fullname">Okonkwo Celestine</h2>
            <h2 className="role">Fullstack Developer</h2>
            <p className="website">c.okonkwo.website</p>
            <button className="email">
                <div className="buttonContent">
                    <img src="../src/assets/email_icon.png"/>
                    <a href="mailto:c.okonkwo@sdsd.com">
                        Email
                    </a>
                </div>
            </button>
        </section>
    )
}