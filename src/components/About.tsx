import styled from "@emotion/styled";
import nige from '../assets/nige_about.png'
import stamp from '../assets/stamp.png'
import { ContentStyling, Flexbox} from "./ContentStyling";

export default function About() {

    return(
        <AboutStyling>
            <ContentStyling>
                <Flexbox>
                    <div className="image-wrapper">
                        <img src={nige}/>
                    </div>
                    <div className="text-wrapper">
                        <div className="stamp-wrapper">
                            <img src={stamp}/>
                        </div>
                        <p className="salutation">Dear Esteemed Friend,</p>
                        <p>I'm Prince Ekundayo, heir to the Nigerian Prince, who was notorious for sending the 'Nigerian Prince' emails, scamming your parents and grandparents out of money.</p>
                        <p>In a quest for redemption, I present NIGE, a true meme coin, to transform a legacy of empty promises into one of real opportunity and guaranteed enrichment.</p>
                        
                    </div>
                </Flexbox>
            </ContentStyling>
        </AboutStyling>
    )
}

const AboutStyling = styled.div`
    position: relative;
    box-sizing: border-box;
    flex-direction: row;
    width: 100%;
    height: 500px;
    .image-wrapper {
        position: relative;
        display: block;
        width: 425px;
        z-index: 10;
        top: 130px;
        img {
            width: 100%;
            height: auto;
            display: block;
        }
    }
    .text-wrapper {
        position: relative;
        width: 350px;
        height: auto;
        left: 50px;
        top: 160px;
        .salutation {
            font-family: "AmericanTypeWriterBold";
        }
        .stamp-wrapper {
            position: absolute;
            top: -30px;
            right: -110px;
            width: 200px;
            z-index:-1;
            img {
                width: 100%
            }
        }
    }
`