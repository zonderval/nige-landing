import styled from "@emotion/styled";
import coin1 from '../assets/coin1.png'
import coin2 from '../assets/coin2.png'
import coin3 from '../assets/coin3.png'
import { Content } from "./StyledDivs";
import { colors } from "../stylingconstants";

export default function Buy() {

    return(
        <BuyStyling id='buy'>
            <Content>
                <div className="coin1-wrapper">
                    <img src={coin1}/>
                </div>
                <div className="text1-wrapper">
                    <h1>Buy NIGE, <span style={{color: colors.gold}}>the cheapest coin on the market.</span></h1>
                    <p>Guaranteed enrichment starts with buying NIGE, and buying it CHEAP. During the initial release of the tokens, <span style={{fontFamily: 'AmericanTypewriterBold'}}>NIGE will be priced between 0,0000000005 and 0,0000000006 USDC (10 zeros).</span> Buy NIGE with USDC directly on Orca or through Jupiter.</p>
                </div>
                <div className="coin2-wrapper">
                    <img src={coin2}/>
                </div>
                <div className="text2-wrapper">
                    <h1><span style={{color: colors.gold}}>Follow these 3 rules </span>to ensure you buy cheap.</h1>
                    <div className="bullet">
                        <h1>1</h1>
                        <p>Until all tokens are in circulation, <span style={{fontFamily: 'AmericanTypewriterBold'}}>never buy NIGE for more than 0,0000000006</span></p>
                    </div>
                    <div className="bullet">
                        <h1>2</h1>
                        <p>Recommended to buy <span style={{fontFamily: 'AmericanTypewriterBold'}}>small amounts at a time</span></p>
                    </div>
                    <div className="bullet">
                        <div className="inner-bullet">
                            <p>0 - 30% tokens released, spend max 50 USDC per buy</p>
                        </div>
                    </div>
                    <div className="bullet">
                        <div className="inner-bullet">
                            <p>30-60% token release, max 200 USDC</p>
                        </div>
                    </div>
                    <div className="bullet">
                        <div className="inner-bullet">
                            <p>60-100%, max 800 USDC</p>
                        </div>
                    </div>
                    <div className="bullet">
                        <h1>3</h1>
                        <p style={{fontFamily: 'AmericanTypewriterBold'}}>HODL</p>
                    </div>
                </div>
                <div className="coin3-wrapper">
                    <img src={coin3}/>
                </div>
            </Content>
        </BuyStyling>
    )
}

const BuyStyling = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin-bottom: 90px;
    scroll-margin-top: 115px;;
    .coin1-wrapper {
        position: absolute;
        float: right;
        right: 20px;
        top: -60px;
        width: 130px;
        img {
            width: 100%;
        }
    }
    .coin2-wrapper {
        position: relative;
        float: right;
        margin-bottom: -200px;
        right: calc(82% * 1);
        top: -85px;
        z-index: -5;
        width: 150px;
        opacity: 80%;
        img {
            width: 100%;
        }
        @media (max-width: 759px) {
            right: calc(80% * 1.11);
        }
    }
    .coin3-wrapper {
        position: relative;
        float: right;
        margin-bottom: -150px;
        bottom: 40px;
        right: 60px;
        z-index: 10;
        /* width: 150px; */
        img {
            width: 100%;
        }
        @media (max-width: 759px) {
            visibility: hidden;
        }
    }
    .text1-wrapper {
        position: relative;
        height: auto;
        width: auto;
        margin: auto;
        text-align: center;
        padding-top: 70px;
        padding-bottom: 70px;
        
        h1 {
            max-width: 450px;
            margin: auto;
        }
        p {
            max-width: 650px;
            padding-left: 20px;
            padding-right: 20px;
            margin: auto;
            margin-top: 30px;
        }
    }
    .text2-wrapper {
        position: relative;
        height: auto;
        width: auto;
        margin: auto;
        text-align: center;
        padding-bottom: 50px;
        h1 {
            padding-bottom: 20px;
            padding-left: 50px;
            padding-right: 50px;
            max-width: 450px;
            margin: auto;
        }
        p {
            max-width: 590px;
            margin: auto;
            margin-top: 30px;
        }
        .bullet {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-align: left;
            max-width: 650px;
            margin: auto;
            h1 {
                color: ${colors.gold};
                width: 11px;
                padding: 15px;
                padding-right: 30px;
                margin: 0;
            }
            p {
                padding: 15px;
                margin: 0;
            }  
            .inner-bullet {
                p {
                    margin: 0;
                    padding-top: 0px;
                    margin-left: 100px;
                    font-size: 15px;
                }
            }
        }
    }

`