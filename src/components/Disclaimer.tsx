import styled from "@emotion/styled";

import { Content, Flexbox} from "./StyledDivs";
import { colors } from "../stylingconstants";

export default function Disclaimer() {

    return(
        <DisclaimerStyling>
            <Content>
                <Flexbox>
                    <div className="text-wrapper">               
                        <h1>Disclaimer</h1> 
                        <p>NIGE is not associated with Nigeria or Nigerian Royalty</p>
                        <p>NIGE has as much value as you give it</p>
                        <p>NIGE value is reliant on diamond hands 💎🤲🏼</p>
                    </div> 
                </Flexbox>
            </Content>
        </DisclaimerStyling>
    )
}

const DisclaimerStyling = styled.div`
    position: relative;
    box-sizing: border-box;
    background-color: ${colors.dark};
    width: 100%;
    height: auto;
    padding: 30px;
    .text-wrapper {
        position: relative;
        height: auto;
        max-width: 700px;
        text-align: center;
        h1 {
            color: ${colors.gold}
        }
        p {
            color: ${colors.light}
        }
    }
`