import React from "react"
import email_icon from '/src/assets/email_Icon.png'

export default function Details() {
    return (
        <section className="details">
            <h2 className="fullname">Okonkwo Celestine</h2>
            <h2 className="role">Fullstack Developer</h2>
            <p className="website">c.okonkwo.website</p>
            <button className="email">
                <div className="buttonContent">
                    <img src={email_icon}/>
                    <a href="mailto:c.okonkwo@sdsd.com">
                        Email
                    </a>
                </div>
            </button>
        </section>
    )
}