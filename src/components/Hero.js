import React from 'react'

export default function Hero() {
  return (
    <React.Fragment>
      <div id="home" style={{ backgroundColor: "lightGrey", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <span>
          <h1 style={{ fontSize: "24px", textDecoration: "underline"}}>Marcus Kyung:</h1>
          <h2>Front End Developer.</h2>
          <h2>Project Manager.</h2>
          <h2>Developer.</h2>
        </span>
      </div>
    </React.Fragment>
  )
}