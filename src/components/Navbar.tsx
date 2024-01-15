import styled from "@emotion/styled";
import {ContentStyling} from "./ContentStyling.ts";
import nige from '../assets/nige.png'
import { colors } from "../stylingconstants.ts";

export default function Navbar() {

    return(
        <NavbarStyling>
            <ContentStyling>
                <div className="home">
                    <img src={nige}></img>
                    <h1>Nige</h1>
                </div>
            </ContentStyling>
        </NavbarStyling>
    )
}

const NavbarStyling = styled.div`
    position: fixed;
    box-sizing: border-box;
    background-color: rgba(248, 247, 229, 0.9);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: opacity(20%) blur(6px);
    z-index: 11;
    height: 100px;
    width: 100%;
    .home {
        position: absolute;
        display: flex;
        height: 50px;
        top: 25%;
        padding: auto;
        align-items: center;
        color: ${colors.green};
        img {
            height: 100%;
            margin-right: 10px;
        }
    }
`