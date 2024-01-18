import styled from "@emotion/styled";
import {Content} from "./StyledDivs.ts";
import nige from '../assets/nige.png'
import { colors } from "../stylingconstants.ts";

export default function Navbar() {

    return(
        <NavbarStyling>
            <Content>
                <div className="floating-navbar">
                    <div className="home">
                        <img src={nige}></img>
                        <h1>
                            Nige
                        </h1>
                    </div>
                    <div className="menu">
                        <div className="menu-item">
                            <p>
                                <a href="#tokenomics">
                                    Tokenomics
                                </a>
                            </p>
                        </div>
                        <div className="menu-item">
                            <p>
                                <a href="#buy">
                                    Buy
                                </a>
                            </p>
                        </div>
                        <div className="menu-item">
                            <p >
                                <a href='#funds'>
                                    Funds
                                </a> 
                            </p>
                        </div>
                    </div>
                </div>
                
            </Content>
        </NavbarStyling>
    )
}

const NavbarStyling = styled.div`
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    top: 15px;
    border-radius: 50px;
    height: 100px;
    z-index: 11;
    .floating-navbar {
        position: relative;
        width: 100%;
        margin: auto;
        height: 100%;
        border-radius: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(248, 247, 229, 0.8);
        backdrop-filter:  blur(6px);
        -webkit-backdrop-filter: blur(6px);
        @media (max-width: 450px) {
            justify-content: space-around;
        } 

        .home {
            position: relative;
            display: flex;
            height: 50px;
            left: 25px;
            padding: auto;
            align-items: center;
            color: ${colors.green};
            @media (max-width: 450px) {
                left: 20px;
            } 
    
            img {
                height: 100%;
                margin-right: 25px;
                @media (max-width: 450px) {
                    margin-right: 10px;
                } 
            }
            h1 {
                @media (max-width: 759px) {
                    visibility: hidden;
                }   
            }
            @media (max-width: 759px) {
                display: block;
            } 
        }

        .menu {
            
            width: 320px;
            margin-right: 25px;
            display: flex;
            justify-content: space-between;
            .menu-item{
                cursor: pointer;
                a {
                    color: ${colors.green};
                    border-radius: 32px;
                    padding: 12px;
                    font-family: "AmericanTypewriterBold";
                    transition: 100ms ease;
                    :hover {
                        color: ${colors.gold};
                        background-color: ${colors.green}
                    }
                    
                }
            }
            @media (max-width: 759px) {
                max-width: 280px;
            }  
        } 
    }
    
`