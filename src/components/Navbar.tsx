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
                        <h1>Nige</h1>
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
        width: 95%;
        margin: auto;
        height: 100%;
        border-radius: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(248, 247, 229, 0.8);
        backdrop-filter:  blur(6px);
        -webkit-backdrop-filter: blur(6px);

        .home {
            position: relative;
            display: flex;
            height: 50px;
            left: 50px;
            padding: auto;
            align-items: center;
            color: ${colors.green};
            
        img {
            height: 100%;
            margin-right: 10px;
        }
    }
    }
    
`