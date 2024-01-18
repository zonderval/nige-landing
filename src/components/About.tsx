import styled from "@emotion/styled";
import nige from '../assets/nige_about.png'
import stamp from '../assets/stamp.png'
import { Content, Flexbox} from "./StyledDivs";

export default function About() {

    return(
        <AboutStyling>
            <Content>
                <Flexbox>
                    <div className="image-wrapper">
                        <img src={nige}/>
                    </div>
                    <div className="text-wrapper">               
                        <p className="salutation">Dear Esteemed Friend,</p>
                        <p>I'm Prince Ekundayo, heir to the Nigerian Prince, who was notorious for sending the 'Nigerian Prince' emails, scamming your parents and grandparents out of money.</p>
                        <p>In a quest for redemption, I present NIGE, a true meme coin, to transform a legacy of empty promises into one of real opportunity and guaranteed enrichment.</p>   
                    </div> 
                </Flexbox>
                <div className="stamp-wrapper">
                    <img src={stamp}/>
                </div>
            </Content>
        </AboutStyling>
    )
}

const AboutStyling = styled.div`
    position: relative;
    box-sizing: border-box;
    padding-top: 130px;
    width: 100%;
    height: auto;
    .image-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 350px;
        z-index: 10;
        padding-bottom: 30px;
        img {
            width: 95%;
            height: auto;
        }
    }
    .text-wrapper {
        position: relative;
        height: auto;
        width: 350px;
        padding-bottom: 50px;
        .salutation {
            font-family: "AmericanTypeWriterBold";
        }
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