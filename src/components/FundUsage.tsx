import styled from "@emotion/styled";
import lp from '../assets/lp.gif'
import { Content, Flexbox} from "./StyledDivs";
import { colors } from "../stylingconstants";

export default function FundUsage() {

    return(
        <FundUsageStyling id='funds'>
            <Content>
                <Flexbox>
                    <div className="gif-wrapper">
                        <img src={lp}/>
                    </div>
                    <div className="text-wrapper">
                        <p>When you buy NIGE with USDC, that USDC will be used to <span style={{fontFamily: 'AmericanTypewriterBold'}}>increase the TVL in the liquidity pool.</span> This will facilitate more efficient trades!.</p>
                    </div>
                </Flexbox>
            </Content>
        </FundUsageStyling>
    )
}

const FundUsageStyling = styled.div`
    position: relative;
    box-sizing: border-box;
    background-color: ${colors.gold};
    width: 100%;
    height: auto;
    padding-bottom: 30px;
    scroll-margin-top: 115px;

    .gif-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -200px;
        margin-bottom: -200px;
        width: 400px;
        z-index: 10;
        img {
            width: 110%;
            height: auto;
        }
    }
    .text-wrapper {
        position: relative;
        height: auto;
        width: 300px;
        padding-top: 20px;
    }
    .stamp-wrapper {
        position: absolute;
        width: 300px;
        float: right;
        bottom: -70px;
        right: 30px;
        z-index:-1;
        img {
            width: 100%
        }
    }
`