import styled from "@emotion/styled";
import {colors} from "../stylingconstants.ts"
import { ContentStyling } from "./ContentStyling.ts";

export default function Tokenomics() {

    return(
        <TokenomicsStyling>
            <ContentStyling>
                <p>tokenomics</p>
            </ContentStyling>
        </TokenomicsStyling>
    )
}

const TokenomicsStyling = styled.div`
    position: absolute;
    background-color: ${colors.green};
    box-sizing: border-box;
    width: 100%;
    height: 500px;
`