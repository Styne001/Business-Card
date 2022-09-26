import React from "react"
import styne from '/src/assets/styne.jpeg'

export default function Image() {
    return (
        <main className="main">
            <img src={styne} className="styne"/>
        </main>
    )
}