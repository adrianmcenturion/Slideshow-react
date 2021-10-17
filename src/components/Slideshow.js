import React from 'react'
import img1 from './../img/img1.jpeg'
import img2 from './../img/img2.jpeg'
import img3 from './../img/img2.png'
import { ReactComponent as FlechaIzquierda} from './../img/iconmonstr-angel-left-thin.svg'
import { ReactComponent as FlechaDerecha} from './../img/iconmonstr-angel-right-thin.svg'
import styled from 'styled-components';


const Slideshow = () => {
    return (
        <ContenedorPrincipal>
            <ContenedorSlideshow>
            <Slide>
                <a href="https://www.falconmasters.com">
                    <img src={img1} alt="" />
                </a>
                <TextoSlide>
                    <p>15% descuento</p>
                </TextoSlide>

            </Slide>
            <Slide>
                <a href="https://www.falconmasters.com">
                    <img src={img2} alt="" />
                </a>
                <TextoSlide>
                    <p>15% descuento</p>
                </TextoSlide>

            </Slide>
            <Slide>
                <a href="https://www.falconmasters.com">
                    <img src={img3} alt="" />
                </a>
                <TextoSlide>
                    <p>15% descuento</p>
                </TextoSlide>

            </Slide>
            </ContenedorSlideshow>
            <Controles>
                    <Boton>
                        <FlechaIzquierda />
                    </Boton>
                    <Boton derecho>
                        <FlechaDerecha />
                    </Boton>
            </Controles>
        </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.div`
    position: relative;

`;
const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 9;
    max-height: 500px;
    position: relative;

    img {
        width: 100%;
        vertical-align: top;
    }
    
`;
const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;
const TextoSlide = styled.div`
    background: rgba(0, 0, 0, .5);
    color: #fff;
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 700px) {
        position: relative;
        background: #000
    }
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;  
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover {
        background: rgba(0,0,0,.2);
        // path {
        //     fill: #fff;
        // }
    }

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
    }

    ${props => props.derecho ? 'right: 0': 'left: 0'}
`;

export default Slideshow
