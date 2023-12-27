import React from 'react'
import styled from 'styled-components'

function Navbar() {
return (
    <>
    <navcontainer>
        <h2>Navbar <span>responsive</span></h2>
        <div>
            <a href="">home</a>
            <a href="">shop</a>
            <a href="">contact</a>
            <a href="">blog</a>
        </div>
    </navcontainer>  
    </>
)
}

export default Navbar

const navcontainer = styled.nav``





