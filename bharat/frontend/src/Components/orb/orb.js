import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowsize } from '../../utils/useWindowsize';

function Orb() {

    const {width, height} = useWindowsize()

    console.log(width,height);

    const moveOrb = keyframes`
        0%{
            transform: translate(0,0);
        }
        25%{
            transform: translate(0,${height}px)
        }
        50%{
            transform: translate(${width}px,0)
        }
        75%{
            transform: translate(${width}px,${height}px)
        }
        100%{
            transform: translate(0,0);
        }
    `

    const OrbStyled = styled.div`
        width: 100vh;
        height: 100vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(200px);
        animation: ${moveOrb} 10s alternate linear infinite;
    `; 

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb
