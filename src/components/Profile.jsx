import React from "react"
import About from "./details/About"
import Interests from "./details/Interests"
import Details from "./details/Details"
import Footer from './Footer'

export default function Profile() {
    return (
        <section className="profile">
            <Details />
            <About />
            <Interests />
            <Footer />
        </section>
    )
}