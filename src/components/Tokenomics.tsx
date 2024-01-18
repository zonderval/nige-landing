import styled from "@emotion/styled";
import {colors} from "../stylingconstants.ts"
import { Content, Flexbox } from "./StyledDivs.ts";

export default function Tokenomics() {

    return(
        <TokenomicsStyling>
            <Content>
                <Flexbox>
                    <div className="text-wrapper">
                        <h1>Redemption starts with <span style={{color: colors.gold}}>fair tokenomics</span></h1>
                        <p>±97,5% of tokens can be owned by you. There will be no early investors and no whales. You, children of the scammed, will collectively hold the power to redeem your families stolen wealth.</p>
                    </div>
                    <div className="diagram-wrapper">
                        <svg viewBox="0 0 360 360">
                            <circle className="circle-white" cx="180" cy="180" r="155"  fill="transparent" />
                            <circle className="circle-gold" cx="180" cy="180" r="155" fill="transparent"
                                stroke-dasharray="973" stroke-dashoffset="24" transform="rotate(-90 180 180)" />
                        </svg>
                        <h1>97.5%</h1>
                        <p>Owned by YOU</p>
                    </div>
                </Flexbox>
            </Content>  
        </TokenomicsStyling>
    )
}

const TokenomicsStyling = styled.div`
    position: relative;
    box-sizing: border-box;
    background-color: ${colors.green};
    width: 100%;
    height: auto;

    .text-wrapper {
        position: relative;
        height: auto;
        box-sizing: border-box;
        width: 340px;
        padding: 5px;
        margin-top: 25px;
        color: ${colors.light}
    }

    .diagram-wrapper {
        position: relative;
        height: 360px;
        width: 360px;
        margin-bottom: 40px;
        margin-top: 50px;

        .circle-white{
            stroke: ${colors.light};
            stroke-width: 25px;
        }

        .circle-gold{
            stroke: ${colors.gold};
            stroke-width: 25px;
        }

        h1 {
            position: absolute;
            color: ${colors.gold};
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 0;
            font-size: 42pt;
        }

        p {
            position: absolute;
            color: ${colors.light};
            top: 66%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 0;
            font-size: 21px;
        }
    }
`